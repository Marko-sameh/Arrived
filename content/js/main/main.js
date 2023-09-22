$(document).ready(function () {
    
$(window).scroll(function () { 
    if($(window).scrollTop()>=100)
    {$("nav").addClass("scrolnav");}
    else
    {$("nav").removeClass("scrolnav");};
});

$(".nav-btn").click(function () { 
    $(".nav-inp").toggle(600);
    
});

// counter sec
$("#coun1").each( function () { 
     $(this).prop('counter',0).animate({
        counter:$(this).text()
     },{
        duration:10000,
        easing:'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
          });
});
$("#coun2").each( function () { 
     $(this).prop('counter',0).animate({
        counter:$(this).text()
     },{
        duration:10000,
        easing:'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
          });
});
$("#coun3").each( function () { 
     $(this).prop('counter',0).animate({
        counter:$(this).text()
     },{
        duration:10000,
        easing:'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
          });
});
$("#coun4").each( function () { 
     $(this).prop('counter',0).animate({
        counter:$(this).text()
     },{
        duration:10000,
        easing:'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
          });
});

// end counter sec
// sec 4

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

// end sec 4
 
// sec 8
$(".rental-btn-style").hover(function () {
    $(".ico-fly").css("left", "35%");
    
  }, function () {
    $(".ico-fly").css("left", "25%");
  }
);
// end sec 8

});


Fancybox.bind("[data-fancybox]", {
    // Custom options
  });



  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 500,
      modifier: 2,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });




