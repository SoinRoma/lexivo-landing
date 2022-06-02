// Якорные ссылки
$(".nav-list").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top - 100;
    $('body,html').animate({scrollTop: top}, 1000);
});


// Бургер Меню
const menu = document.querySelector('.nav-menu');
const menuButton = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');

menuButton.addEventListener('click', ()=>{
    menu.classList.add('is-active');
    menuClose.classList.add('is-active');
    document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', ()=>{
    menuClose.classList.remove('is-active');
    menu.classList.remove('is-active');
    document.body.style.overflow = 'auto';
});
