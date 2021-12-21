$(document).ready(function(){
    // offset espacio usado .top de la altura que hay entre la parte superior y el menu
	var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){
        // scrollTop se da cuenta que sobrepasa la altura y se movera 
        if ( $(window).scrollTop() > altura) {
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });
});

// otra forma que vi
// posicionarMenu();
// $(window).scroll(function () {
//     posicionarMenu();
// });

// function posicionarMenu() {
//     var altura_del_header = $('.header').outerHeight(true);
//     var altura_del_menu = $('.menu').outerHeight(true);

//     if ($(window).scrollTop() >= altura_del_header) {
//         $('.menu').addClass('fixed');
//         $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
//     } else {
//         $('.menu').removeClass('fixed');
//         $('.wrapper').css('margin-top', '0');
//     }
// }

// var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

// document.documentElement.style.setProperty('main-bg-color', randomColor);