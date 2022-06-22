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
const hTag = document.getElementsByClassName("hTag");

function showMenu() {
    const menuChild = document.querySelector(".menuChild");
    const mChild = menuChild.children;
    const blackLogo = document.querySelector("#logo");

    if(subToggle) {
        menuBar.style.setProperty('height', 'calc(100vh)');
        for (let i = 0; i < mChild.length; i++) {
            const mySpan = mChild[i];
            mySpan.style.backgroundColor = "black";
        }
        blackLogo.style.color = "black";
    } else {
        menuBar.style.height = "0px";
        for (let i = 0; i < mChild.length; i++) {
            const mySpan = mChild[i];
            mySpan.style.backgroundColor = "white";
        }
        blackLogo.style.color = "white";
    }

    toggleHTag(subToggle);
    subToggle = !subToggle;
}

function toggleHTag(subToggle) {
    for (let j=0; j < hTag.length; j++) {
        const tagNum = hTag[j];
        if (subToggle) {
            tagNum.style.color = "transparent";
        } else {
            $('hTag').show();
            tagNum.style.color = "#ea894e";
        }
    }
}

hamburger.addEventListener("click", showMenu);