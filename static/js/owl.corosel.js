$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
  })
  });

 
      $(document).ready(function(){
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
})