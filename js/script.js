let mouseCursor = document.querySelector('.cursor')

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
    // script to toggle menu when menu icon pressed
    $('.menu-btn').click(function() {
        $("header .menu").toggleClass("active");
        $("header .menu-btn").toggleClass("active");
    })
});

window.addEventListener("mousemove", function(e) {
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
});