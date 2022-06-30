window.onload = function() {
    var rect = document.getElementsByClassName('rectangle');
    var hoverT = document.getElementsByClassName('skill-hover');

    for (let i=0; i<8; i++) {
        hoverT[i].style.display = "none";

        rect[i].addEventListener("mouseover", function() {
            hoverT[i].style.display = "block";
        });
        rect[i].addEventListener("mouseout", function() {
            hoverT[i].style.display = "none";
        })
    }
}