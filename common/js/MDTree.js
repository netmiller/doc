
// -----------------------------------------------------
function __buildTree( data, options ) {

    // luodaan vas.reunan menupuu Underscoren template:n avulla

    var tmpl = '\
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
                <% if (options.cPage == child.href) { %>\
                    <li class="page curr" id="<%= child.href %>">\
                    <i class="glyphicon glyphicon-log-out"></i><%= child.key %>\
                <% } else { %>\
                    <li class="page" id="<%= child.href %>">\
                    <i class="glyphicon glyphicon-edit"></i><%= child.key %>\
                <% } %>\
                </li>\
                <% }); %>\
            </ul>\
        </li>\
        <% }); %>\
    </ul>';

    return _.template( tmpl, { "context": data, "options": options } );

}

// -----------------------------------------------------
// Toggle the collapse icon based on the current state.
function __toggleIcon(node) {

    // Change the icon.
    if (node.find('span.menu-1 i.glyphicon-chevron-up').length != 0) {
        // tehdään collapse
        node.children('span').children('i')
            .removeClass('glyphicon-chevron-up')
            .addClass('glyphicon-chevron-down');
    } else {
        // muuten tehdään expand -toiminto
        node.children('span').children('i')
            .removeClass('glyphicon-chevron-down')
            .addClass('glyphicon-chevron-up');
    }
}

// -----------------------------------------------------
function __expandAll() {
    // haetaan kaikki 'li.section' -rivit
    _.each($( '#listTree li.section' ), function(e) {
        var node = $(e);
        // vaihdetaan kuvaketta
        __toggleIcon(node);
        // ja näytetään lapsirivit
        node.children('ul').children('li').slideDown('fast');
    });
}

// -----------------------------------------------------
function __collapseAll() {
    // haetaan kaikki 'li.section' -rivit
    _.each($( '#listTree li.section' ), function(e) {
        var node = $(e);
        // vaihdetaan kuvaketta
        __toggleIcon(node);
        // piilotetaan lapsirivit
        node.children('ul').children('li').slideUp('fast');
    });
}

// -----------------------------------------------------
function __toggleMenu(e) {
    var node = $(e.target).parentsUntil( 'ul' );
    // vaihdetaan kuvaketta
    __toggleIcon(node);
    // vaihdetaan lapsirivit visible/hidden
    node.children('ul').children('li').slideToggle(200);
    e.stopImmediatePropagation();
}

// -----------------------------------------------------
// Vaihdetaan current-rivin osoittimen paikkaa
function __toggleCurrent(node) {
    // poistetaan kaikilta 'li.page' riveiltä current-luokka
    if (node) {
        $( '#listTree li.page').removeClass('curr');
        $( '#listTree li.page i').removeClass('glyphicon-log-out').addClass('glyphicon-edit');
        node.addClass('curr');
        node.children('i').addClass('glyphicon-log-out');
    } else {
        console.log('toggle-current-error');
    }
}

// -----------------------------------------------------
function getAbsolutePath() {
    //var loc = window.location;
    //var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    //return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    // tehdään sama Regexp:n avulla
    return new RegExp('[^?]+/').exec(window.location.href);
}

// -----------------------------------------------------
function __getDoc(node, haku) {

    // otetaan kiinni vas.reunan valikosta klikattu uuden sivun eventti
    // (tahan voisi rakentaa toisen logiikan href->id -vaihtoehdon tilalle)
    //var haku = node.attr('id') || 'sivu-puuttuu.md';

    // poistetaan kaikilta 'li.page' riveiltä current-luokka
    __toggleCurrent(node);

    // haetaan markdown-tiedosto ja renderöidään se sivulle
    $.get( haku )
        .done(function( data ) {
            $( "#page" ).html( marked(data) );
            $.cookie("currPage", haku, { expires : 120 });
        })
        .fail(function() {
            console.log( "sivu puuttuu" );
        })
}

// -----------------------------------------------------
function __getLink(e) {

    var haku = e.target.href || 'sivu-puuttuu.md',
        ap = new RegExp(getAbsolutePath()),
        node = '';

    // testataan onko linkki dokumentin sisäinen (=markdown)
    // jos on, niin haetaan markdown-tiedosto ja renderöidään se sivulle
    if (haku.search(ap) >= 0) {

        e.preventDefault();

        // haetaan menupuusta kohteen id, jonka avulla se voidaan merkata 'current' luokkaan
        // poistetaan absoluuttinen polku hakuid:n alusta, jolloin saadaan tiedoston 'id'
        haku = haku.replace(ap, '');
        // kahlataan kaikki 'li.page' rivit
        _.each($( '#listTree li.page' ), function(lp) {
            if (lp.id === haku) {
                node = $(lp);
            }
        });

        // renderöidään sivu __getDoc funktion kautta
        __getDoc(node, haku);

    } else {
        // muuten avataan ulkoinen linkki aina omaan ikkunaan
        e.target.target = '_blank';
    }

}
