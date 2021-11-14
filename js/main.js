// Preload
$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloadSite');
});
$(window).load(function() {
    $('.preloadWrapper').fadeOut();
    $('body').removeClass('preloadSite');
});

//Cerrar menú hamburguesa al hacer clic en contacto y video
$(".navbar-nav li a, .video").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});


// ToTop
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('.toTop').fadeIn();
    } else {
        $('.toTop').fadeOut();
    }
});
$(function () {
    $('#contacto').bind("click", function () {
        $('html, body').animate({ scrollTop: $(document).height() }, 1200);
        return false;
    });
    $('#toTop').bind("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 1200);
        return false;
    });
});

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)});

// Autoplay y pausa el video cuando se cierra el modal
$(document).ready(function(){
    $("#video").on('hide.bs.modal', function () {
      document.getElementById("srcVideo").pause(); 
    });
    $("#video").on('shown.bs.modal', function () {
      document.getElementById("srcVideo").play(); 
    });
});
function modal(v){
    document.getElementById("srcVideo").src = v
    $("#video").modal()
};

// Iniciar Librería AOS
AOS.init({disable: 'mobile'});