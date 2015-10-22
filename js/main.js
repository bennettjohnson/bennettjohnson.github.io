/* jquery.js */
/* jquery.velocity.js */
/*jslint browser: true*/
/*global $, jQuery, alert*/
var isNotOpen;
var y;
$(document).ready(function () {
    'use strict';
    isNotOpen = true;
    $("#toggle").on("click", function () {
        if (isNotOpen) {
            $("#sidebar-container").velocity({translateX: "100%"});
            isNotOpen = false;
        } else {
            $("#sidebar-container").velocity({translateX: "0%"});
            isNotOpen = true;
        }
    });
    $(".scroll").click(function (event) {
        event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        $('html,body').animate({scrollTop: dest}, 1000, 'swing');
    });
    $(window).on('hashchange', function (e) {
        history.replaceState("", document.title, e.originalEvent.oldURL);
    });
});

$(document).scroll(function () {
    'use strict';
    y = $(document).scrollTop();
    if (y > 100) {
        $("#hamburger").attr("style", "fill: orange");
        $("#topbar").velocity({translateY: "100%"});
    }
});

