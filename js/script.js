// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});
ScrollReveal().reveal('.header, .social-icon, .menu',{origin: ('top')});
ScrollReveal().reveal('.home-content, .adress-number, .logo',{origin: ('left')});
ScrollReveal().reveal('iframe, form, .portofolio-container',{origin: ('right')});
ScrollReveal().reveal('.adress-container, .sub, .profile-container, .table-container, .curiculum-container, .copy',{origin: ('bottom')});
// typed js
const typed = new Typed('.multiple',{
    strings:['Programming', 'Networking', 'Internet of Things', 'English', 'Tahfidz', 'Religion'],
    typespeed: 500,
    backspeed: 200,
    backdelay: 1000,
    loop: true

});