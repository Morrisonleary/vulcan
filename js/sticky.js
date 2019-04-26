$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });

     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('.fixed-top').addClass('black');
           }

           else {
                 $('.fixed-top').removeClass('black');
           }
     });
