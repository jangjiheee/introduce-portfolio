$(function() {
    var charts = $(".rectangles");
    var chart = $('.rectangle');
    var chartOST = chart.offset().top - 950; // chart의 화면에서 떨어진 높이가 1000


    $(window).scroll(function() {
        var currentSCT = $(this).scrollTop();
        if(currentSCT >= chartOST) {
            if(!charts.hasClass('active')) {

                animateChart(); 
                charts.addClass('active');
            }
        }
    });

    function animateChart() {
        chart.each(function(){
            var item = $(this); // div class="chart"를 말한다.
            var title = item.find("h3");
            var targetNum = title.attr("date-num"); // <h2>.attr(속성)에서 data-num것을 가지고와라.
            var circle = item.find('rect');

            // 각각의 svg 서클의 값을 설정해주는 값
            $({rate:0}).animate({rate:targetNum}, {
                duration: 1500,
                progress: function() { // 애니메이션이 변화할때마다 할일을 지정해준다.
                    var now = this.rate; // this는 애니메이트 전체를 말한다.
                    // console.log(now)
                    title.text(Math.floor(now)); // title에서 받아온값을 text에 넣어라.
                    circle.css({strokeDashoffset: 861-(861*now/100)});
                }
            })
        });
    }
});