$(document).ready(function() {
    $(window).scroll(function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 20) {
            $("header").addClass("sticky");
            $("h1").addClass("sticky-state");
            $(".menu-item").addClass("sticky-state");
        } else {
            $("header").removeClass("sticky");
            $("h1").removeClass("sticky-state");
            $(".menu-item").removeClass("sticky-state");
        }
    });
});