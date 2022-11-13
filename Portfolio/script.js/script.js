let  menu = document.querySelector('#menu-icon');
let navabar= document.querySelector('.navbar');

menu.onclic = () =>{
    menu.classList.toggle('bx-x');
    navabar.classList.toggle('active');

};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    menu.classList.remove('active')
};

const sr = scrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true

})

sr.reveal('.home-text', {delay:200,  origin:'top'})
sr.reveal('.home-img', {delay:400,  origin:'top'})
sr.reveal('.about,.services, .cta, .resume, .contact,.copyright'{delay:200, origin'top'})