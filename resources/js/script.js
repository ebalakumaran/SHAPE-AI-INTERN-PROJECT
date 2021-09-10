$(document).ready(function () {
    $(".js--about-section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky-nav");
        } else {
            $("nav").removeClass("sticky-nav");
        }
    });
    $(".js--scroll-to-contact").click(function () {
        $("html,body").animate({ scrollTop: $(".js--contact").offset().top }, 1500);
    });
    $(".js--scroll-to-home").click(function () {
        $("html,body").animate({ scrollTop: $(".js--home").offset().top }, 1500);
    });
    $(".js--scroll-to-contact").click(function () {
        $("html,body").animate({ scrollTop: $(".js--contact").offset().top }, 1500);
    });
    $(".js--scroll-to-about").click(function () {
        $("html,body").animate({ scrollTop: $(".js--about-section").offset().top }, 1500);
    });
});
