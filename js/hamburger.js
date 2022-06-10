// 햄버거 
/*window.onload = function() {
    const hamburger = document.getElementById("menu");
    const menuBar = document.querySelector("mobile-menu");
    
    $(hamburger).on("click", function() {
        $(menuBar).slideDown(500);
    });
}*/

// 모바일 햄버거 버튼
const hamburger = document.getElementById("menu");
const menuBar = document.querySelector(".mobile-gnb");

let subToggle = true;
function showMenu(){
    if(subToggle) {
        menuBar.style.setProperty('height', 'calc(100vh)');
        subToggle =! subToggle;
      } else {
        menuBar.style.height = "0px";
        subToggle =! subToggle;
    }
}

hamburger.addEventListener("click", showMenu);