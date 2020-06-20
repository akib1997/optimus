
$(document).ready(function () {
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
      $('#slider').css('display', 'block');
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