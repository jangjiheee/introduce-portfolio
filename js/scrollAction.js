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

    for(let i=0; i<skillChildren.length; i++) {
        skillChildren[i].setAttribute('data-aos-duration', '2500'
        );
    }
}
