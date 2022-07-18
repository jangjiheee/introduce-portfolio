window.onload = function() {
    var rect = document.getElementsByClassName('rectangle'); // 흰색 네모
    var hoverT = document.getElementsByClassName('skill-hover'); // 주황색 네모
    var skillT = document.getElementsByClassName('skill-text'); // 왼쪽설명글
    var closeBtn = document.getElementsByClassName("closeBtn");
    var modalW = document.getElementById("design-modal"); //모달 전체 창
    var myModal = document.getElementsByClassName("design-modal-box"); // 모달 작은 창   
    var openModal = document.getElementsByClassName("dModal"); // 클릭할 디자인

    // 최초 로딩 시 HTML Skill Text showing.
    skillT[0].style.display = "block";  

    let hoverSize = hoverT.length;
    for (let i = 0; i < hoverSize; i++) {
        hoverT[i].addEventListener("click", function() {
            // alert("you clicked region number : " + i);
            setSkillTextDisplayMode(i);
        })
    }

    // determine skil text display
    function setSkillTextDisplayMode(position) {
        let skillSize = skillT.length;
        for (let i = 0; i < skillSize; i++) {
            let mySkillT = skillT[i];
            if (i == position) {
                mySkillT.style.display = "block";
            } else {
                mySkillT.style.display = "none";
            }
        }
    }

    // 모달창 띄우기
    for (var k=0; k<openModal.length; k++) {
        openModal[k].addEventListener("click", bindClick(k));
    }
    
    function bindClick(k) {
        return function() {
            modalW.style.display = "block";
            myModal[k].style.display = "block";
            document.body.style.overflow = "hidden";
        }
    }

    // 모달창 닫기
    for(let j=0; j<closeBtn.length; j++){
        closeBtn[j].addEventListener("click", function() {
            modalW.style.display = "none";
            myModal[j].style.display = "none";
            document.body.style.overflow = "unset";
        })
    }

    // 햄버거 버튼
    const hamburger = document.getElementById("menu");
    const menuBar = document.querySelector(".mobile-gnb");

    let subToggle = true;
    const hTag = document.getElementsByClassName("hTag");

    hamburger.addEventListener("click", showMenu);

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
                tagNum.style.color = "#ea894e";
            }
        }
    }

    $(".mob").on("click", function() {
        hamburger.checked = false;
        showMenu();
        // if (typeof hamburger.onclick == "function") {
        //     hamburger.onclick.apply(hamburger);
        // }
    })


}

// 메뉴 스크롤 이벤트
$(function() {
    $(window).on("scroll", function() {
        if($(this).scrollTop() > 650) {
            $(".main-menu").fadeIn();
        } else {
            $(".main-menu").fadeOut();
        }
    });

    $(window).on("scoll", function() {
        if($(this).scrollTop()>1000) {
            $(".s").fadeIn();
        } else {
            $(".s").fadeOutn();
        }
    })
})

$(function() {
    // text 셔플
    var $ = function(id) {
    return document.getElementById(id);
    };
    var inc = 0;
    var out = 0;
    var str = 'WELCOME TO MY AREA';
    var chars = 'ABCDEFGHIJ';
    var t;

    var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
            $('anim').appendChild(document.createTextNode(str[out]));
            out++;
        } else if (out == str.length) {
            $('shuffle').innerHTML = '';
            clearInterval(t);
            return;
        }
        $('shuffle').innerHTML = chars[Math.floor(Math.random() * chars.length)];
    };
    t = setInterval(anim, 20);
    $('anim').innerHTML = '';
})