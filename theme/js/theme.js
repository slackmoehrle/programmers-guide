$( document ).ready(function() {

    // Replace the .icon-home class and add the cocos-2dx logo
    $('.icon-home').replaceWith("<div><a id='cclogo' href='#'></a><span id='ccspan'>Programming Guide</span></div>");

    mobileMenu();

    runCleanUp();

    languageTabs();

    hljs.initHighlightingOnLoad();

    $('table').addClass('docutils');

});

window.SphinxRtdTheme = (function (jquery) {
    var stickyNav = (function () {
        var navBar,
            win,
            stickyNavCssClass = 'stickynav',
            applyStickNav = function () {
                if (navBar.height() <= win.height()) {
                    navBar.addClass(stickyNavCssClass);
                } else {
                    navBar.removeClass(stickyNavCssClass);
                }
            },
            enable = function () {
                applyStickNav();
                win.on('resize', applyStickNav);
            },
            init = function () {
                navBar = jquery('nav.wy-nav-side:first');
                win    = jquery(window);
            };
        jquery(init);
        return {
            enable : enable
        };
    }());
    return {
        StickyNav : stickyNav
    };
}($));

function languageTabs() {
    $('.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
}

function mobileMenu() {
    // Shift nav in mobile when clicking the menu.
    $(document).on('click', "[data-toggle='wy-nav-top']", function() {
        $("[data-toggle='wy-nav-shift']").toggleClass("shift");
        $("[data-toggle='rst-versions']").toggleClass("shift");
    });

    // Close menu when you click a link.
    $(document).on('click', ".wy-menu-vertical .current ul li a", function() {
        $("[data-toggle='wy-nav-shift']").removeClass("shift");
        $("[data-toggle='rst-versions']").toggleClass("shift");
    });

    $(document).on('click', "[data-toggle='rst-current-version']", function() {
        $("[data-toggle='rst-versions']").toggleClass("shift-up");
    });
}

function runCleanUp() {
    // Remove all hr, they are not needed
    $('.rst-content hr').remove();

    // Make tables responsive
    $("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>");
}