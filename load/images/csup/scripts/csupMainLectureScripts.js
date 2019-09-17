//Special Child H5P Resize
function h5PResize() {
    window.h5pResizerInitialized = true;

    // Map actions to handlers
    var actionHandlers = {};

    /**
     * Prepare iframe resize.
     *
     * @private
     * @param {Object} iframe Element
     * @param {Object} data Payload
     * @param {Function} respond Send a response to the iframe
     */
    actionHandlers.hello = function (iframe, data, respond) {
        // Make iframe responsive
        iframe.style.width = '100%';

        // Tell iframe that it needs to resize when our window resizes
        var resize = function (event) {
            if (iframe.contentWindow) {
                // Limit resize calls to avoid flickering
                respond('resize');
            } else {
                // Frame is gone, unregister.
                window.removeEventListener('resize', resize);
            }
        };
        window.addEventListener('resize', resize, false);

        // Respond to let the iframe know we can resize it
        respond('hello');
    };

    /**
     * Prepare iframe resize.
     *
     * @private
     * @param {Object} iframe Element
     * @param {Object} data Payload
     * @param {Function} respond Send a response to the iframe
     */
    actionHandlers.prepareResize = function (iframe, data, respond) {
        // Do not resize unless page and scrolling differs
        if (iframe.clientHeight !== data.scrollHeight ||
                data.scrollHeight !== data.clientHeight) {

            // Reset iframe height, in case content has shrinked.
            iframe.style.height = data.clientHeight + 'px';
            respond('resizePrepared');
        }
    };

    /**
     * Resize parent and iframe to desired height.
     *
     * @private
     * @param {Object} iframe Element
     * @param {Object} data Payload
     * @param {Function} respond Send a response to the iframe
     */
    actionHandlers.resize = function (iframe, data, respond) {
        // Resize iframe so all content is visible. Use scrollHeight to make sure we get everything
        iframe.style.height = data.scrollHeight + 'px';
    };

    /**
     * Keyup event handler. Exits full screen on escape.
     *
     * @param {Event} event
     */
    var escape = function (event) {
        if (event.keyCode === 27) {
            exitFullScreen();
        }
    };

    // Listen for messages from iframes
    window.addEventListener('message', function receiveMessage(event) {
        if (event.data.context !== 'h5p') {
            return; // Only handle h5p requests.
        }

        // Find out who sent the message
        var iframe, iframes = document.getElementsByTagName('iframe');
        for (var i = 0; i < iframes.length; i++) {
            if (iframes[i].contentWindow === event.source) {
                iframe = iframes[i];
                break;
            }
        }

        if (!iframe) {
            return; // Cannot find sender
        }

        // Find action handler handler
        if (actionHandlers[event.data.action]) {
            actionHandlers[event.data.action](iframe, event.data, function respond(action, data) {
                if (data === undefined) {
                    data = {};
                }
                data.action = action;
                data.context = 'h5p';
                event.source.postMessage(data, event.origin);
            });
        }
    }, false);

    // Let h5p iframes know we're ready!
    var iframes = document.getElementsByTagName('iframe');
    var ready = {
        context: 'h5p',
        action: 'ready'
    };
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].src.indexOf('h5p') !== -1) {
            iframes[i].contentWindow.postMessage(ready, '*');
        }
    }

}

//Right Menu Collapse Init
$('.button-collapse').sideNav({
    menuWidth: 400,
    edge: 'right',
    closeOnClick: true,
    draggable: true
});

//initialize vars
var $current_page = 1;
//Animation Controller
var animating = 0;
//increment tracker/counter
var $total_sections = 0;
//numerals for navigation
var pageNumerals = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 11: "XI", 12: "XII", 13: "XIII", 14: "XIV", 15: "XV"};
//header index
var pageHead_i = 0;


//      
// Nav Title AutoFill
//
//get height of all nav items
function getNavHeight() {
    var navHeight = 0;
    $('ul.side-nav > li').each(function () {
        navHeight += $(this).height();
    });
    return (navHeight);
}
//populate navigation with page titles automatically.
function populateNav() {
//      clear nav
    $("ul.side-nav").html("");
//      repopulate
    $("ul.side-nav").append('<li><div class="csup-gray flavorBand"></div></li>');
    var $off_by_1 = 0;
    $(".pageHead").each(function () {
        pageHead_i++;
        if ($(this).text() == "Overview" || $(this).prev("i").hasClass("fa-check-square-o")) {
            $off_by_1 = 1;
            $("ul.side-nav").append('<li data-target="' + pageHead_i + '"><a><i class="fa fa-check-square-o fa-2x white-text"></i><span class="navHead">' + $(this).text() + '</span></a><div class="divider"></div></li>');
        } else if ($(this).text() == "Resources" || $(this).prev("i").hasClass("fa-book")) {
            $("ul.side-nav").append('<li data-target="' + pageHead_i + '"><a><i class="fa fa-book fa-2x white-text"></i><span class="navHead">' + $(this).text() + '</span></a><div class="divider"></div></li>');
        } else {
            $("ul.side-nav").append('<li data-target="' + pageHead_i + '"><a><i class="fa center-align navNumeral white-text">' + pageNumerals[(pageHead_i - $off_by_1)] + '</i><span class="navHead">' + $(this).text() + '</span></a><div class="divider"></div></li>');
        }
    });

    $("ul.side-nav").append('<li><div class="csup-gray flavorBandBottom" style="display:none;"></div></li>');
}





//Next & Prev Nav
function show() {
    animating = 1;
    $current_page = parseInt($current_page);
    $("section.page.active-page").removeClass('active-page').fadeOut(300, function () {
        $("section.page#Page" + $current_page).addClass("active-page").fadeIn(300, function () {
            manageNav($current_page);
            $("html").scrollTop(0);
            animating = 0;
            h5PResize();
            $(window).trigger("resize");
        });
    });
}

//next button
$(".pageNext").click(function () {
    $next_page = $current_page + 1;
    if ($next_page <= $total_sections) {
        if (animating == 0) {
            $current_page = $next_page;
            show();
            manageNav($next_page);
            h5PResize();
        }
    }

});

//prev button
$(".pagePrev").click(function () {
    $prev_page = $current_page - 1;
    if ($prev_page > 0) {
        if (animating == 0) {
            $current_page = $prev_page;
            show();
            manageNav($prev_page);
            h5PResize();
        }
    }

});

function manageNav($n) {
    if ($n == $total_sections) {
        $(".pageNext").fadeOut(300);
    } else {
        $(".pageNext").fadeIn(300);
    }
    if ($n == 1) {
        $(".pagePrev").fadeOut(300);
    } else {
        $(".pagePrev").fadeIn(300);
    }
    h5PResize();
}

//Fixed Banner Dynamic Resizer
/*function adjustWidth() {
 var parentwidth = $(".parent").width();
 $(".child").width(parentwidth);
 }*/

//fix window width 
var $trigger_resize = 0;
function resizeHandler() {
    if ($trigger_resize === 0) {
        $trigger_resize = 1;

        if (getNavHeight() <= ($(window).height() - 40)) {
            $("div.flavorBandBottom").css("display","block");
        } else {
            $("div.flavorBandBottom").css("display","none");
        }

        setTimeout(function () {
//            adjustWidth();
            h5PResize();
            $trigger_resize = 0;
        }, 750);
    }
}

$(window).resize(resizeHandler);

// on document load
$(document).ready(function () {

    //H5P Resizer Activate
    h5PResize();
    $("#menu-toggle").click(function () {
        setTimeout(function () {
//            adjustWidth();
            h5PResize();
        }, 750);
    });

    //Run Navigation Population
    populateNav();

    //Header Resizer
//    adjustWidth();

    //fix prev button
    manageNav(1);

    //Dynamic Copyright Year Update
    var currentYear = new Date().getFullYear();
    $("#printed-year").html(currentYear);


	//ScrollFire Init - Unique to CSUP Work In Progress
/*	var options = [
	  {selector: '.class', offset: 200, callback: customCallbackFunc },
	  {selector: '.other-class', offset: 200, callback: function() {
    customCallbackFunc();
  } },
];
	Materialize.scrollFire(options);*/
	
    //Parallax Init
    $('.parallax').parallax();

    //Modal Init
    $('.modal').modal();

    //Nav On-Click Init
    $("ul.lectureSideNav li").each(function () {
        $(this).click(function () {
            if (animating == 0) {
                $current_page = $(this).attr("data-target");
                show();
                h5PResize();
            }
        });
    });

    //Tooltip Init
    $('.tooltipped').tooltip({delay: 50});

    //Slider Carousel   
    $('.carousel.carousel-slider').carousel({fullWidth: true});

    //auto-number sections
    $("section.page").each(function () {
        //increment to start with 1
        $total_sections++;
        //increment and attach data propery for reference
        $(this).attr("id", "Page" + $total_sections);
        $(this).attr("data-target", $total_sections);
    });
    $("section.page:first-child").addClass('active-page');

    //Initally Hide Additional Section
    setTimeout(function () {
        $("section.page").slice(1).hide(50, function () {
            //Hide Loading Splash Page
            $("#Mask").fadeOut(750);
        });
    }, 1500);


    //Dynamically Color Links
    $('div.pageCont').find('a').addClass('csup-blue-text');

//    setTimeout(function () {
//        adjustWidth();
//    }, 750);

    //Wrapping Tabs
    $('ul.tabsWrap li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabsWrap li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    //make sure window resulotion respects heights
    resizeHandler();
});

    //ScrollFire - CSUP Lecture Custom - Work In Progress

/*var options = [

{selector: '#moduleTitleBar', offset: 850, callback: function(el) {
	
            jQuery('.moduleTitle').css({position: 'fixed', right: '0px', top: '0px', width: '100%'});

	
} }



];
Materialize.scrollFire(options);*/