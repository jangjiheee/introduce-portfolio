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
const menuChild = document.querySelector(".menuChild");

let subToggle = true;
function showMenu() {
    const mChild = menuChild.children;
    console.log(mChild);

    if(subToggle) {
        menuBar.style.setProperty('height', 'calc(100vh)');
        mChild.style.color = "black"
    } else {
        menuBar.style.height = "0px";
        mChild.style.color = "white"
    }
    subToggle = !subToggle;

}

hamburger.addEventListener("click", showMenu);