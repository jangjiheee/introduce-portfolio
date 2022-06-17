$(function() {
    $(window).on("scroll", function() {
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 500) {
            $(".main-menu").fadeIn();
        } else {
            $(".main-menu").fadeOut();
        }
    });
})
/*$(document).ready(function() {
    $("#main-nav").hide()
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop()>1000) {
                $("#main-nav").fadeIn()
            }
        })
    })
})*/