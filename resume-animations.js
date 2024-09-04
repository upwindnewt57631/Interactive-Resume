$(document).ready(function(){
    $('.toggle-section').click(function(){
        $(this).next('.resume-item').slideToggle();
        $(this).find('.glyphicon').toggleClass('glyphicon-menu-down glyphicon-menu-up');
        $(this).next('.resume-item').find('.gif-placeholder').fadeToggle(1000);
    });
});