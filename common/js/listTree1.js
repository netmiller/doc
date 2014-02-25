/*
 * Copyright 2012 Clay Walker
 * Licensed under GPLv2 ONLY
 * Esan testiversio josta Checkbox:t karsittu
 */

;(function($) {

    var template = '\
		<ul>\
			<% _.each(context, function(parent, index) { %>\
			<li class="section">\
				<span class="menu-1"><%= parent.key %><i class="glyphicon glyphicon-chevron-up"></i></span>\
				<% if (options.startCollapsed) { %>\
				<ul style="display: none;">\
				<% } else { %>\
				<ul>\
				<% } %>\
					<% _.each(parent.values, function(child, index) { %>\
					<li class="page" id="<%= child.href %>">\
					    <i class="glyphicon glyphicon-edit"></i><%= child.key %>\
					</li>\
					<% }); %>\
				</ul>\
			</li>\
			<% }); %>\
		</ul>';

    // ---
	// Toggle the collapse icon based on the current state.
	function _toggleIcon(jNode) {

		// Change the icon.
		if (jNode.children('ul').is(':visible')) {
			// tehdään collapse
			jNode.children('span').children('i')
                .removeClass('glyphicon-chevron-up')
				.addClass('glyphicon-chevron-down');
		} else {
			// muuten tehdään expand -toiminto
			jNode.children('span').children('i')
                .removeClass('glyphicon-chevron-down')
                .addClass('glyphicon-chevron-up');
		}
	}

    // ---
    // Vaihdetaan current-rivin osoittimen paikkaa
    function _toggleCurrent(jNode) {
        //console.log(jNode);
        // poistetaan kaikilta 'li.page' riveiltä current-luokka
        $( '#listTree li.page').removeClass('curr');
        $( '#listTree li.page i').removeClass('glyphicon-log-out');
        // ja lisätään valitulle riville
        jNode.addClass('curr');
        jNode.children('i').addClass('glyphicon-log-out');
    }

    // ---
    function getAbsolutePath() {
        //var loc = window.location;
        //var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
        //return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
        // tehdään sama Regexp:n avulla
        return new RegExp('[^?]+/').exec(window.location.href);
    }

    // ---
	var methods = {

		init: function(context, options) {
			// Default options
			var defaults = {
				'startCollapsed': false,
				'selected': context
			};
			options = $.extend(defaults, options);

			return this.each(function() {
				var $this = $(this),
					data = $this.data('listTree');

				// If the plugin hasn't been initialized yet...
				if (!data) {

					$(this).data('listTree', {
						"target": $this,
						"context": context,
						"options": options,
						"selected": options.selected
					});

                    // Register collapse handlers on parents.
					$(document)

                        // .on('click', '#listTree > ul > li > span', function(e) {
                        .on('click', '#listTree > ul > li, #listTree > ul > li > i.glyphicon', function(e) {
						    //var node = $(e.target).parent();
						    var node = $(e.target).parentsUntil( 'ul' );
						    // Change the icon.
						    _toggleIcon(node);
						    // Toggle the child list.
						    node.children('ul').slideToggle('fast');
						    e.stopImmediatePropagation();
					    })

                        // otetaan kiinni vas.reunan valikosta klikattu uuden sivun eventti
                        // (tahan voisi rakentaa toisen logiikan href->id -vaihtoehdon tilalle)
                        .on('click', '#listTree li.page', function(e) {
                            var haku = e.target.id || 'sivu-puuttuu.md';
                            //console.log('#listTree li.page => ' +haku);
                            //console.log(e);
                            // poistetaan kaikilta 'li.page' riveiltä current-luokka
                            _toggleCurrent($(this));
                            // haetaan markdown-tiedosto ja renderöidään se sivulle
                            $.get( haku)
                                .done(function( data ) {
                                    $( "#page" ).html( marked(data) );
                                    $.cookie("currPage", haku);
                                })
                                .fail(function() {
                                    console.log( "sivu puuttuu" );
                                })
                        })

                        // testataan sivulla olevan linkin click-eventti
                        .on('click', '#page a', function(e) {
                            //console.log(e);
                            var haku = e.target.href || 'sivu-puuttuu.md';
                            // testataan onko linkki dokumentin sisäinen (=markdown)
                            var ap = new RegExp(getAbsolutePath());
                            // jos on, niin haetaan markdown-tiedosto ja renderöidään se sivulle
                            if (e.target.href.search(ap) >= 0) {
                                e.preventDefault();
                                $.get( haku)
                                    .done(function( data ) {
                                        $( "#page" ).html( marked(data) );
                                        $.cookie("currPage", haku);
                                    })
                                    .fail(function() {
                                        console.log( "linkki puuttuu: " + haku );
                                    })
                            // muuten avataan ulkoinen linkki aina omaan ikkunaan
                            } else {
                                e.target.target = '_blank';
                            }

                        })

					// Generate the list tree.
					$this.html( _.template( template, { "context": context, "options": options } ) );

                }
			});
		},

		expandAll: function() {
			// For each listTree...
			return this.each(function() {
				var node = $(this).children('ul').children('li');
				// Change the icon.
				_toggleIcon(node);
				// Show the child list.
				node.children('ul').slideDown('fast');
			});
		},

		collapseAll: function() {
			// For each listTree...
			return this.each(function() {
				var node = $(this).children('ul').children('li');
				// Change the icon.
				_toggleIcon(node);
				// Hide the child list.
				node.children('ul').slideUp('fast');
			});
		},

        initCurrent: function() {
            var cp = $.cookie('currPage') || '';
            _.each($( '#listTree li.page' ), function(lp) {
                //console.log(lp);
                if (lp.id === cp) {
                    //_toggleCurrent(lp);
                    //console.log('OKOKOK:' + lp.id);
                }
            });
        },

        update: function(context, options) {
			// Default options
			var defaults = {
				"startCollapsed": false,
				"selected": context
			};
			options = $.extend(defaults, options);

			return this.each(function() {
				var $this = $(this),
					data = $this.data('listTree');

				// Ensure the plugin has been initialized...
				if (data) {
					// Update the context.
					$(this).data('listTree', {
						"target": $this,
						"context": context,
						"options": options,
						"selected": options.selected
					});

					// Generate the list tree.
					//$this.html( _.template( template, { "context": context, "options": options } ) );
					$this.html( $.template( template, { "context": context, "options": options } ) );
				}
			});
		}
	};

	$.fn.listTree = function(method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.listTree');
		}

	};
})(jQuery);
