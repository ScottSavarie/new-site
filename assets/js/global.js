/* Javascript for Integer */

/* =jQuery
============================================================================== */

	
$(document).ready(function() {
$("#headline,.center-arrow,.project").hide(0);
$("#headline").delay(100).fadeIn('slow');
$(".center-arrow").delay(600).slideDown(300);
$(".project").show(0);



}); // end document ready



/* =Royal Slider
============================================================================== */


jQuery(document).ready(function($) {
    $(".royalSlider").royalSlider({
        controlsInside: false,
        slideSpacing: 0,
        autoScaleSliderHeight: 450,
        autoScaleSlider: true,
        imageScaleMode: 'fill',
        keyboardNavEnabled: true


    });  
});

// end Royal Slider