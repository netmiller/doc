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
				<span class="menu-1"><%= parent.key %><i class="fa fa-chevron-up"></i></span>\
				<% if (options.startCollapsed) { %>\
				<ul style="display: none;">\
				<% } else { %>\
				<ul>\
				<% } %>\
					<% _.each(parent.values, function(child, index) { %>\
					<li class="page" id="<%= child.href %>">\
					    <i class="fa fa-caret-right"></i><%= child.key %>\
					</li>\
					<% }); %>\
				</ul>\
			</li>\
			<% }); %>\
		</ul>';

    // ----------------------------------------------------
	// Toggle the collapse icon based on the current state.
	function _toggleIcon(jNode) {

		// Change the icon.
		if (jNode.children('ul').is(':visible')) {
			// tehdaan collapse
			jNode.children('span').children('i')
                .removeClass('fa-chevron-up')
				.addClass('fa-chevron-down');
		} else {
			// tehdaan expand -toiminto
			jNode.children('span').children('i')
                .removeClass('fa-chevron-down')
                .addClass('fa-chevron-up');
		}
	}

    // ----------------------------------------------
	var methods = {

		init: function(context, options) {
			// Default options
			var defaults = {
				"startCollapsed": false,
				"selected": context
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
                        .on('click', '#listTree > ul > li, #listTree > ul > li > i.fa', function(e) {
						    //var node = $(e.target).parent();
						    var node = $(e.target).parentsUntil( 'ul' );
						    // Change the icon.
						    _toggleIcon(node);
						    // Toggle the child list.
						    node.children('ul').slideToggle('fast');
						    e.stopImmediatePropagation();
					    })

                        // tahan voisi rakentaa oman logiikan href->id -vaihtoehdon tilalle
                        .on('click', '#listTree li.page', function(e) {
                            var haku = e.target.id || 'sivupuuttuu.md';
                            //console.log(haku);
                            //console.log($(this));
                            //$.get( haku, function (data) {
                            //    console.log(haku);
                            //    $( "#page" ).html( marked(data) );
                            //});
                            // testataan ajax-hakua
                            $.get( haku)
                                .done(function( data ) {
                                    //console.log(data);
                                    $( "#page" ).html( marked(data) );
                                })
                                .fail(function() {
                                    console.log( "sivu puuttuu" );
                                })
                                .always(function() {
                                    $.cookie("currPage", haku);
                                });
                        })
                        // testataan saadaanko linkin click-eventti kiinni
                        .on('click', '#page a', function(e) {
                            //console.log(e);

                            e.preventDefault();

                            console.log('a eventti: ' + e.target.href );
                            //alert('a eventti: ' + e.target.href );
                            //$("#page").load( "huu10.html #haku22" );

                            //$.get(e.target.href, function (data) {
                            //    $( "#page" ).html( marked(data) );
                            //});

                            $.get( e.target.href)
                                .done(function( data ) {
                                    //console.log(data);
                                    $( "#page" ).html( marked(data) );
                                })
                                .fail(function() {
                                    console.log( "linkki ei onnistu: " + e.target.href );
                                })

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

		update: function(context, options) {
			// Default options
			var defaults = {
				"startCollapsed": false,
				"selected": context
			};
			options = $.extend(defaults, options);

            console.log('huu2');

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
