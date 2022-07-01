$(function() {
    $(window).on("scroll", function() {
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 650) {
            $(".main-menu").fadeIn();
        } else {
            $(".main-menu").fadeOut();
        }
    });
})

$(function() {
    var $ = function(id) {
    return document.getElementById(id);
    };
    var inc = 0;
    var out = 0;
    var str = 'WELCOME TO MY AREA';
    var chars = 'ABCDEFGHIJ';
    var t;

    var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
            $('anim').appendChild(document.createTextNode(str[out]));
            out++;
        } else if (out == str.length) {
            $('shuffle').innerHTML = '';
            clearInterval(t);
            return;
        }
        $('shuffle').innerHTML = chars[Math.floor(Math.random() * chars.length)];
    };
    t = setInterval(anim, 20);
    $('anim').innerHTML = '';
})