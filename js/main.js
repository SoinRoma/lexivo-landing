// Якорные ссылки
$(".nav-list").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top - 100;
    $('body,html').animate({scrollTop: top}, 1000);
});