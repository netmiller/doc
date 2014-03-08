
// doc.netmiller.fi [AngularJS app]
// Copyright 2014 Netmiller [Esa.Laitila@netmiller.fi]
// License : The MIT License

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
app.factory('haeSivu', ['$window','$http','$cookieStore', function($window,$http,$cookieStore) {
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
			for (var i = 0, len = scope.valikko.menu.length; i < len; i++) {
				for (var j = 0, len2 = scope.valikko.menu[i].menu2.length; j < len2; j++) {
					scope.valikko.menu[i].menu2[j].isActive =
						(scope.valikko.menu[i].menu2[j].href === sivu) ? true : false;
				}
			}

			// haetaan markdown-dokumentti
			$http({
				method: 'GET',
				url: sivu,
				cache: false
			})
			.success(function(data,status) {
				$window.scrollTo(0,0);
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
		var i = $scope.valikko.menu.length;
		while (i--) {
			$scope.valikko.menu[i].visible = ($scope.valikko.meta.startCollapsed) ? false : true;
		}
		// haetaan joko cookie-talletettu viimeisin sivu tai oletussivu
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
