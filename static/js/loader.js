$(document).ready(function() {
    // A SIDE NAVIGATION
    $('.sidenav').sidenav();

    // PHOTO SLIDER
    $('.slider').slider({       
        indicators: false,
        height: 500,
        transition: 500,
        interval: 2000
    });

    $('.scrollspy').scrollSpy();

});

