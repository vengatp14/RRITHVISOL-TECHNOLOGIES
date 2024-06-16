$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,            // Enable autoplay
        autoplayTimeout: 5000,     // Time between slides in milliseconds (5 seconds in this example)
        autoplayHoverPause: true,  // Pause autoplay on hover
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 2
            }
        }
    });

    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
});
