$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    dots:true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        },
        1400:{
            items:1
        }
    }
});
