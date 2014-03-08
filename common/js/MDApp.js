
//var app = angular.module('doc', ['ngResource']);
var app = angular.module('doc', ['ngCookies']);


// sovelluksen alustuksia
app.run(function($rootScope, $cookieStore) {
	//console.log('app-init-run');
	$rootScope.lastPage = $cookieStore.get('lastPage') || '';
	//console.log($rootScope.lastPage);
});


app.directive('myBindHtml', [function() {
	return function(scope, element, attr) {
		element.addClass('ng-binding').data('$binding', attr.myBindHtml);
		scope.$watch(attr.myBindHtml, function(value) {
			element.html(value || '');
		});
	}
}]);


// haetaan absoluuttinen polku
app.factory('absolutePath', ['$window', function($window) {
	return {
		get : function() {
			var loc = window.location;
			var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
			return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
			// tehdään sama Regexp:n avulla
			//return new RegExp('[^?]+/').exec($window.location.href);
		}
	}
}]);


// haetaan vasemman reunan valikko (JSON)
app.factory('haeValikko', ['$http', function($http) {
	return {
		get : function(scope, conf, cb) {
			// haetaan valikko (JSON)
			$http.get(conf)
			.success(function(data,status) {
				//console.log(status);
				scope.valikko = data;
				cb(status);
			})
			.error(function(data,status) {
				onsole.log('Error: ' + conf + ' : status=' + status);
				cb(status);
			});
		}
	}
}]);


// haetaan markdown-sivu ja renderöidään se 'marked' -modulilla
// Todo: pitäisi siirtää renderöinti omaan moduliinsa ja tehdä siihen ainakin lang-mukainen customointi
app.factory('haeSivu', ['$http', '$cookieStore', function($http, $cookieStore) {
	//alustetaan 'marked' -modulin optiot
	var md = marked;
	md.setOptions({
		gfm: true,
		pedantic: false,
		sanitize: false
		//highlight: function (text, lang, callback) {
		//	console.log(lang);
		//	console.log(text);
		//	var snip = '<pre><code>' + text + '</code></pre>';
		//	if (lang == 'box1') {
		//		snip = '<p class=' + lang + '">' + text + '</p>';
		//	}
		//	callback('',snip);
		//}
	});

	return {
		get : function(scope, sivu, callback) {

			// merkataan haettava sivu->true, ja muut false:ksi
			scope.valikko.menu.forEach(function(menu) {
				menu.menu2.forEach(function(menu2) {
					menu2.isActive = (menu2.href === sivu) ? true : false;
				});
			});

			// haetaan markdown-dokumentti
			$http({
				method: 'GET',
				url: sivu,
				cache: false
			})
			.success(function(data,status) {
				//console.log(status);
				// talletetaan pyydetty sivu cookie-arvoksi
				$cookieStore.put('lastPage', sivu);
				// sivu renderöidään HTML-muotoon marked-modulilla
				//scope.page = marked(data);
				//scope.page = md(data);
				// tämä tuntuu toimivan
				//var tokens = md.lexer(data);
				//tokens.forEach(function(value) {
				//	console.log(value);
				//});

				// tehdään markdown renderöinti asynkronisesti
				md(data, function(err, text) {
					//console.log(text);
					scope.page = text;
				});
				//scope.page = md(data, {renderer:rd});
				if (callback) callback(status);
			})
			.error(function(data,status) {
				//console.log('Error: ' + data);
				console.log('Error: ' + sivu + ' : status=' + status);
				scope.page = '';
				if (callback) callback(status);
			});
		}
	}
}]);


app.controller('mainCtrl', function($scope,$rootScope,$cookieStore,haeValikko,haeSivu,absolutePath) {
	//console.log('mainCtrl starting....');

	$scope.page  = '<p> init .....</p>';
	$scope.valikko  = {};

	haeValikko.get($scope, './config/menu.json', function(r) {
		// alustetaan [pää]valikon visible true/false metatietojen perusteella
		$scope.valikko.menu.forEach(function(menu1) {
			menu1.visible = ($scope.valikko.meta.startCollapsed) ? false : true;
		});
		// haetaan joko cookie talletettu viimeisin sivu tai oletussivu
		$scope.lastPage = ($rootScope.lastPage) ? $rootScope.lastPage : $scope.valikko.meta.default_page;
		haeSivu.get($scope, $scope.lastPage, function(r) {});
	});

	// 1-tason valikkoriville toggle-toiminto click-eventillä
	$scope.toggleMenu = function(menu) {
		//console.log(menu);
		menu.visible = (menu.visible) ? false : true;
	}

	// 2-tason valikkoriville haetaan siihen kytketty markdown-sivu esiin
	$scope.naytaSivu = function(submenu,evt) {
		//console.log(evt.target.attributes.data.value);
		haeSivu.get($scope, submenu.href, function(r) {
			//console.log('sivuhaku paluukoodi ' + r);
			submenu.isSelected = true;
		});
	}

	$scope.toggleAll = function(value) {
		var i = $scope.valikko.menu.length;
		while (i--) {
			$scope.valikko.menu[i].visible = value;
		}
	}

	//$scope.expandAll = function() {
	//	var i = $scope.valikko.menu.length;
	//	while (i--) {
	//		$scope.valikko.menu[i].visible = true;
	//	}
	//}

	//$scope.collapseAll = function() {
	//	var i = $scope.valikko.menu.length;
	//	while (i--) {
	//		$scope.valikko.menu[i].visible = false;
	//	}
	//}

	$scope.redirectLink = function(evt) {
		//console.log(evt);
		// käsitellään vaan linkit (a)
		if (evt.target.tagName == 'A') {
			var haku = evt.target.href || 'sivu-puuttuu.md',
				ap = new RegExp(absolutePath.get());
			// testataan onko linkki dokumentin sisäinen (=markdown)
			// jos on, niin haetaan markdown-tiedosto ja renderöidään se sivulle
			if (haku.search(ap) >= 0) {
				evt.preventDefault();
				haku = haku.replace(ap, '');
				haeSivu.get($scope, haku);
			// muuten avataan ulkoinen linkki omalle sivulleen
			} else {
				evt.target.target = '_blank';
			}
		}
	}

});
