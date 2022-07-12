window.onload = function() {
    var rect = document.getElementsByClassName('rectangle'); // 흰색 네모
    var hoverT = document.getElementsByClassName('skill-hover'); // 주황색 네모
    var skillT = document.getElementsByClassName('skill-text'); // 왼쪽설명글

    for (let i=0; i<8; i++) {
        $('.rectangle').addClass(i);
        $('.skill-hover').addClass(i);
        $('.skill-text').addClass(i);
        
        hoverT[i].style.display = "none";
        skillT[i].style.display = "none";

        rect[i].addEventListener("mouseover", function(event) {
            // hoverT[i].style.display = "block";
            // skillT[i].style.display = "block";
        });
        
        rect[i].addEventListener("click", function(event) {
            // skillT[i].style.display = "block";
            // console.log(event);
        });

        rect[i].addEventListener("mouseout", function(event) {
            // hoverT[i].style.display = "none";
            // skillT[i].style.display = "none";
        });
    }

    skillT[0].style.display = "block";
    hoverT[0].style.display = "block";


    const openModal = document.querySelector(".design-modal");
    const closeModal = document.querySelectorAll(".design-modal-box");
    // console.log(closeModal[0].children[0]);

    for(let i = 0; i <= 5; i ++) {
        closeModal[i].children[0].addEventListener("click", function() {
            for(let j = 0; j <=5; j++) {
                closeModal[j].style.display = "none";
                openModal.classList.remove("design-modal-bgChange")
            };
        });
    };
}

function dog() {
    const modalDog = document.getElementById("dog");
    const modalDogBackground = document.querySelector(".design-modal");
    modalDog.style.display = "block";
    modalDogBackground.classList.add("design-modal-bgChange");
    console.log(modalDog);
}