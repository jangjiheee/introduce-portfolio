$(document).ready(function() {

    
    $(window).scroll( function(){

        $('#main-nav').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            } else {
                $(this).animate({'opacity':'0'},500)
            }
        });
    });

});

    // $(window).on("scroll", function() {
    //     if($(this).scrollTop() > 100) {
    //         $("#mainNav").fadeIn();
    //     } else {
    //         $("#mainNav").fadeOut();
    //     }
    // })


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