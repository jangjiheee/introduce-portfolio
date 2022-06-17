/*AOS.init({
    easing: 'ease-in-out-sine'
});

setInterval(addIetm,300);*/
document.getElementById('photoImg')
.setAttribute('data-aos-duration', '2000');


document.querySelector('.explain')
.setAttribute('data-aos-duration', '1500');

window.onload = function() {
    var skill = document.getElementById("skillImg");
    var skillChildren = skill.children;

    // skillChildren[0].setAttribute('data-aos-duration', '2500');
    // skillChildren[1].setAttribute('data-aos-duration', '2500');
    // skillChildren[2].setAttribute('data-aos-duration', '2500');
    // skillChildren[3].setAttribute('data-aos-duration', '2500');
    // skillChildren[4].setAttribute('data-aos-duration', '2500');
    // skillChildren[5].setAttribute('data-aos-duration', '2500');
    // skillChildren[6].setAttribute('data-aos-duration', '2500');
    // skillChildren[7].setAttribute('data-aos-duration', '2500');
    for(let i=0; i<skillChildren.length; i++) {
        skillChildren[i].setAttribute('data-aos-duration', '2500')
    }
}

document.querySelector('#titleLine')
.setAttribute('data-aos-duration', '2500');

document.getElementById('titleText')
.setAttribute('data-aos-duration', '3000')