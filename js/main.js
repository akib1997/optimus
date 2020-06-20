
$(document).ready(function () {

   // Hide Header on on scroll down
   var didScroll;
   var lastScrollTop = 0;
   var delta = 5;
   var navbarHeight = $('.header').outerHeight();

   $(window).scroll(function (event) {
      didScroll = true;
   });

   setInterval(function () {
      if (didScroll) {
         hasScrolled();
         didScroll = false;
      }
   }, 100);

   function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
         return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight) {
         // Scroll Down
         $('.header').removeClass('nav-down').addClass('nav-up');
      } else {
         // Scroll Up
         if (st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');
         }
      }

      lastScrollTop = st;
   }

   // Menu Toggle 
   $(".menu-btn").click(function () {
      $(".menu-list").toggleClass('added');
   });

   // Call Slider
   $('.myslider').owlCarousel({
      margin: 10,
      items: 1,
      nav: false,
      dots: true,
      dotsData: true,
   });

   // Box click and Hide that and Showing Slider
   $('.box').click(function () {
      $('.optimus-do').hide();
      $('.slider-area').addClass('showSlider')
   })


   // Get titles from the DOM
   var titleMain = $("#animatedHeading");
   var titleSubs = titleMain.find("slick-active");

   if (titleMain.length) {

      titleMain.slick({
         autoplay: true,
         arrows: false,
         dots: false,
         slidesToShow: 3,
         centerPadding: "10px",
         draggable: false,
         infinite: true,
         pauseOnHover: false,
         swipe: false,
         touchMove: false,
         vertical: true,
         verticalScrolling: true,
         speed: 1000,
         autoplaySpeed: 2000,
         useTransform: true,
         cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
         adaptiveHeight: true
      });

      // On init
      $(".slick-dupe").each(function (index, el) {
         $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
      });

      // Manually refresh positioning of slick
      titleMain.slick('slickPlay');
   };

});