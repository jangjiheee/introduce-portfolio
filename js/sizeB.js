window.addEventListener('scroll', function() {
    let img = document.getElementById("#photo");
    let value = window.pageYOffset;
    if(value > 1000) {
        img.style.top (vaule + 100) + 'px';
        img.style.left = "3.5%";
        img.style.opacity = 1;
    } else {
        img.style.left = "-1000px";
    }
});