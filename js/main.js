$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');

    if($(window).scrollTop() > 10){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

  });

  $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});


jQuery(function () {
  $(function () {
    $(window).scroll(function () {
      //Fonction appelée quand on descend la page
      if ($(this).scrollTop() > 200) {
        // Quand on est à 200pixels du haut de page,
        $("#scrollUp").css("right", "10px"); // Replace à 10pixels de la droite l'image
      } else {
        $("#scrollUp").removeAttr("style"); // Enlève les attributs CSS affectés par javascript
      }
    });
  });
});