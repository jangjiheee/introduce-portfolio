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
}