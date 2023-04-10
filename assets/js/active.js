(function ($) {
// Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

        $(".project-titles li").on( 'click', function() {

            $(".project-titles li").removeClass("active");
            $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $(".project-list").isotope({ filter:selector});
        });

    jQuery(window).load(function(){
    jQuery(".project-list").isotope();
    })

    jQuery(document).ready(function($){
        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
        });

        $(".homepage-slides").on("translate.owl.carousel", function(){
            $(".single-slide-item h2, .single-slide-item p").removeClass("animated fadeInDown").css("opacity", "0");
            
            $(".single-slide-item .slide-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".homepage-slides").on("translated.owl.carousel", function(){
            $(".single-slide-item h2, .single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
            $(".single-slide-item .slide-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        
        $(".promotion-area").parallax("50%", 1);

            $('.filtr-container').filterizr();
            $('.simplefilter li').click(function() {
            $('.simplefilter li').removeClass('active');
            $(this).addClass('active');
        });
        
        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        new WOW().init();

        });

    jQuery(window).load(function(){
        jQuery(".factorian-slide-preloader-wrap, .factorian-site-preloader-wrap").fadeOut(500);
    });

       $(".client-testmonial").owlCarousel({
            items: 3,
            nav: false,
            dot: true,
            autoplay: true,
            loop: true,
            margin:30,

        });



    

}(jQuery));	

    