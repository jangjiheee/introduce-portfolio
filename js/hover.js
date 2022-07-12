window.onload = function() {
    var rect = document.getElementsByClassName('rectangle'); // 흰색 네모
    var hoverT = document.getElementsByClassName('skill-hover'); // 주황색 네모
    var skillT = document.getElementsByClassName('skill-text'); // 왼쪽설명글
    var closeBtn = document.getElementsByClassName("closeBtn");
    console.log(closeBtn);
    var modalW = document.getElementById("design-modal");
    console.log(modalW);
    var myModal = document.getElementsByClassName("design-modal-box");
    console.log(myModal);
    var openModal = document.getElementsByClassName("dModal");
    console.log(openModal);

    for (let i=0; i<8; i++) {
        // $('.rectangle').addClass(i);
        // $('.skill-hover').addClass(i);
        // $('.skill-text').addClass(i);
        
        // hoverT[i].style.display = "none";
        // skillT[i].style.display = "none";
        
        // skillT[0].style.display = "block";
        // hoverT[0].style.display = "block";

        // rect[i].addEventListener("mouseover", function() {
        //     hoverT[i].style.display = "block";
        //     // skillT[i].style.display = "block";
        // });
        
        hoverT[i].addEventListener("click", function() {
            skillT[i].style.display = "block";
            console.log(skillT);
        });

        // rect[i].addEventListener("mouseout", function() {
        //     hoverT[i].style.display = "none";
        //     // skillT[i].style.display = "none";
        // });
    }



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

    for(let j=0; j<closeBtn.length; j++){
        closeBtn[j].addEventListener("click", function() {
            modalW.style.display = "none";
            document.body.style.overflow = "unset";
        })
    }    

    console.log(openModal[0]);
    console.log(myModal[0]);
}
