// Preload
$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloadSite');
});
$(window).load(function() {
    $('.preloadWrapper').fadeOut();
    $('body').removeClass('preloadSite');
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
// ToTop
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 900) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
