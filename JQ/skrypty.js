//Przewijanie do sekcji
$(".side-menu a:nth-child(1), .nav-top a:nth-child(1)").on("click", () => {
    $('html, body').animate({
        scrollTop: $("#sekcja1").offset().top
    }, 2000);
});

$(".side-menu a:nth-child(2), .nav-top a:nth-child(2)").on("click", () => {
    $('html, body').animate({
        scrollTop: $("#sekcja2").offset().top
    }, 2000);
});
$(".side-menu a:nth-child(3), .nav-top a:nth-child(3)").on("click", () => {
    $('html, body').animate({
        scrollTop: $("#sekcja3").offset().top
    }, 2000);
});
$(".side-menu a:nth-child(4), .nav-top a:nth-child(4)").on("click", () => {
    $('html, body').animate({
        scrollTop: $("#sekcja4").offset().top
    }, 2000);
});
$(".landingButton").on("click", () => {
    $('html, body').animate({
        scrollTop: $("#sekcja1").offset().top
    }, 2000);
});

//Pojawianie się nav-barów
$(window).on("scroll", () => {
    $('.side-menu-container').toggleClass("active", ($(window).scrollTop() >= 600));
    $('header').toggleClass("active", ($(window).scrollTop() < 600));
});

//zegar
window.addEventListener("load", function zegar() {
    var today = new Date();
    var time = today.getHours() + ":" + (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()) + ":" + (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
    document.getElementById("clock").innerHTML = time;
    setTimeout(zegar, 1000);
})