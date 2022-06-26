$(function() {
    var rect = document.getElementsByClassName('rectangle');
    var hoverT = document.getElementsByClassName('skill-hover');

    console.log(rect);
    console.log(hoverT);

    for (j=0; j<hoverT.length; j++) {
        hoverT[j].style.display = 'none';
        rect[j].addEventListener('click', () => clickedEvent(j-1));
    }

    function clickedEvent(position) {
        console.log("position", position);
        for (let i = 0; i < hoverT.length; i++) {
            if (position == i) {
                hoverT[position].style.display = 'block';
            } else {
                hoverT[position].style.display = 'none';
            }
        }
        
    }
})