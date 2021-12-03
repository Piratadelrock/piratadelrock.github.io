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

// var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

// document.documentElement.style.setProperty('main-bg-color', randomColor);