/* Javascript for Integer */

/* =Intro animation
============================================================================== */

	
$(document).ready(function() {
$("#header, .center-arrow,.project, #intro h1").hide(0);
$("#header, #intro h1").delay(100).fadeIn('slow');
$(".center-arrow").delay(800).slideDown(300);
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




/* =Toggle About
============================================================================== */

	
$(document).ready(function() {
$("#about-container").hide(0);
}); // end document ready


$(document).ready(function() {
$(".navigation ul:first-child").click(function(){
	$("#about-container").slideDown('fast');
	});
}); // end document ready

$(document).ready(function() {
$(".close").click(function(){
    $("#about-container").slideUp('slow');
    });
}); // end document ready















