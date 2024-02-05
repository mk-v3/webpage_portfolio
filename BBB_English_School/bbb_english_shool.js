$(function(){
  /*  HAMBURGER_MENU  */
  $('.hamburger').on('click', function() {
      hamburger();
  });

  $('#navi a').on('click', function() {
    hamburger();
  });

/*  Inview !External_Library */
/*  Interview_Slide_Left  */
$('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if(isInView){
    $(this).stop().addClass('slide-left');
  }
});

/* RIGHT-SLIDE  */
$('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if(isInView){
    $(this).stop().addClass('slide-right');
  }
});

/* BALLOON  */
$('.inview-balloon').on('inview', function(event, isInView, visiblePartX, visiblePartY){
  if(isInView){
    $(this).stop().addClass('balloon');
  }
});
});


/*  HAMBURGER_MENU_COMMON */
function hamburger() {
  $('.hamburger').toggleClass('active');
    if ($('.hamburger').hasClass('active')){
      $('#navi').addClass('active');
    } else {
      $('#navi').removeClass('active');
    }
}