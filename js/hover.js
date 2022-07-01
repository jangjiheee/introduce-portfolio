window.onload = function() {
    var rect = document.getElementsByClassName('rectangle');
    var hoverT = document.getElementsByClassName('skill-hover');
    var skillT = document.getElementsByClassName('skill-text');

    for (let i=0; i<8; i++) {
        hoverT[i].style.display = "none";
        skillT[i].style.display = "none";

        rect[i].addEventListener("mouseover", function() {
            hoverT[i].style.display = "block";
        });
        
        rect[i].addEventListener("click", function() {
            skillT[i].style.display = "block";
        });

        rect[i].addEventListener("mouseout", function() {
            hoverT[i].style.display = "none";
            skillT[i].style.display = "none";
        });
    }
}