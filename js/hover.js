window.onload = function() {
    var rect = document.getElementsByClassName('rectangle'); // 흰색 네모
    var hoverT = document.getElementsByClassName('skill-hover'); // 주황색 네모
    var skillT = document.getElementsByClassName('skill-text'); // 왼쪽설명글
    var closeBtn = document.getElementsByClassName("closeBtn");
    console.log(closeBtn);
    var modalW = document.getElementById("design-modal"); //모달 전체 창
    console.log(modalW);
    var myModal = document.getElementsByClassName("design-modal-box"); // 모달 작은 창
    console.log(myModal);
    var openModal = document.getElementsByClassName("dModal"); // 클릭할 디자인
    console.log(openModal);

    //skill 열기
    // for(let i=0; i<hoverT.length; i++) {
    //     hoverT[i].addEventListener("click", clickSk(i));
    //     console.log(hoverT);
    // }

    // function clickSk(i) {
    //     return function() {
    //         skillT[i].style.display = "block";
    //         // document.body.style.overflow = "hidden";
    //         console.log(skillT);
    //     }
    // }
    hoverT[0].addEventListener("click", function() {
        skillT[0].style.display = "block";
    })

    hoverT[1].addEventListener("click", function() {
        skillT[1].style.display = "block";
        skillT[1].filter(el => el !== skillT[1]).forEach(el => el.style.display = "none")
    })

    // for (let i=0; i<8; i++) {
    //     // $('.rectangle').addClass(i);
    //     // $('.skill-hover').addClass(i);
    //     // $('.skill-text').addClass(i);
        
    //     // hoverT[i].style.display = "none";
    //     // skillT[i].style.display = "none";
        
    //     // skillT[0].style.display = "block";
    //     // hoverT[0].style.display = "block";

    //     // rect[i].addEventListener("mouseover", function() {
    //     //     hoverT[i].style.display = "block";
    //     //     // skillT[i].style.display = "block";
    //     // });
        
    //     // hoverT[i].addEventListener("click", function() {
    //     //     skillT[i].style.display = "block";
    //     //     console.log(skillT);
    //     // });

    //     // rect[i].addEventListener("mouseout", function() {
    //     //     hoverT[i].style.display = "none";
    //     //     // skillT[i].style.display = "none";
    //     // });
    // }

    // openModal[0].addEventListener("click", function() {
    //     modalW.style.display = "block";
    //     myModal[0].style.display = "block";
    // })
    // openModal[1].addEventListener("click", function() {
    //     modalW.style.display = "block";
    //     myModal[1].style.display = "block";
    // })
    // openModal[2].addEventListener("click", function() {
    //     modalW.style.display = "block";
    //     myModal[2].style.display = "block";
    // })

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