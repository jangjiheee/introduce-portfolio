window.onload = function() {
    var rect = document.getElementsByClassName('rectangle'); // 흰색 네모
    var hoverT = document.getElementsByClassName('skill-hover'); // 주황색 네모
    var skillT = document.getElementsByClassName('skill-text'); // 왼쪽설명글

    for (let i=0; i<8; i++) {
        $('.rectangle').addClass(i);
        $('.skill-hover').addClass(i);
        $('.skill-text').addClass(i);
        
        hoverT[i].style.display = "none";
        skillT[i].style.display = "none";

        rect[i].addEventListener("mouseover", function(event) {
            // hoverT[i].style.display = "block";
            // skillT[i].style.display = "block";
        });
        
        rect[i].addEventListener("click", function(event) {
            // skillT[i].style.display = "block";
            // console.log(event);
        });

        rect[i].addEventListener("mouseout", function(event) {
            // hoverT[i].style.display = "none";
            // skillT[i].style.display = "none";
        });
    }

    skillT[0].style.display = "block";
    hoverT[0].style.display = "block";
}