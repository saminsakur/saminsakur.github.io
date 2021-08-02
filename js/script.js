$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            $("header").addClass("sticky");
            $("h1").addClass("sticky-state");
            $(".menu-item").addClass("sticky-state");
        } else {
            $("header").removeClass("sticky");
            $("h1").removeClass("sticky-state");
            $(".menu-item").removeClass("sticky-state");
        }
        if ($(window).scrollTop() > 200) {
            $(".scroll-down").addClass("no-display");
        } else {
            $(".scroll-down").removeClass("no-display");
        }
    });
    // script to toggle menu when menu icon pressed
    $('.menu-btn').click(function() {
        $("header .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // typing Animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Programmer", "Web Developer"],
        typeSpeed: 90,
        backSpeed: 100,
        loop: true
    });
});