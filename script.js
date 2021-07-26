jQuery(document).ready(function ($) {


  mobileMenuSlider();

  //show me your submenu bby but only when width equal 1360px
  function mobileMenuSlider(){
    if ($(window).width() <= 1360) {

      $('.menu-item-mobile').click(function(e) {
        if ($('.sub-menu-mobile', this).length >= 1) {
          e.preventDefault();
        }
        $(this).siblings().find('> .sub-menu-mobile').removeClass('open');
        $(this).find('> .sub-menu-mobile').addClass("open");
        e.stopPropagation();
      });
      
      $('.back-to-main').click(function(e){
        $(this).closest('.sub-menu-mobile').removeClass('open');
        e.stopPropagation();
      })

    }
    }

    // ukradlem troche kodu michala
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {

        mobileMenuSlider();

      }, 250);
  });

}
);

