/* Javascript for scottsavarie.ca */



/* =Intro animation
============================================================================== */


// $(document).ready(function(){
//     $('#header-cover').css({'min-height':(($(window).height())-129)+'px'});
//     $('#intro').css({'padding-top':(($(window).height())/4)+'px'});

//     $(window).resize(function(){
//     $('#header-cover').css({'min-height':(($(window).height())-129)+'px'});
//     $('#intro').css({'padding-top':(($(window).height())/4)+'px'});
//     });
// });


	
$(document).ready(function() {
$("#header-cover, .center-arrow").hide(0);
$("#header-cover").delay(500).fadeIn('slow');
$("#header").delay(500).fadeIn('slow');
}); // end document ready









// /* =Royal Slider
// ============================================================================== */


// jQuery(document).ready(function($) {
//     $(".royalSlider").royalSlider({
//         controlsInside: false,
//         slideSpacing: 0,
//         autoScaleSliderHeight: 450,
//         autoScaleSlider: true,
//         imageScaleMode: 'fill',
//         keyboardNavEnabled: true,
//         numImagesToPreload: 1


//     });  
// });

// // end Royal Slider



// /* =Insert Royalslider
// ============================================================================== */

// $(document).ready(function() {
//     var width = $(window).width();
//     if (width <= 767) {
//         $(".project ul").addClass("royalSlider rsDefault");
//         $(".project ul li").addClass("rsImg");


//     jQuery(document).ready(function($) {
//     $(".royalSlider").royalSlider({
//         controlsInside: false,
//         slideSpacing: 0,
//         autoScaleSliderHeight: 450,
//         autoScaleSlider: true,
//         imageScaleMode: 'fill',
//         keyboardNavEnabled: true,
//         numImagesToPreload: 10


//     });  
// });


//     }
//     else {
//         //Do Something Else
//     }
// });


// $(window).resize(function() {
//     var width = $(window).width();
//     if (width <= 767) {
//         $(".project ul").addClass("royalSlider rsDefault");
//         $(".project ul li").addClass("rsImg");

//     jQuery(document).ready(function($) {
//     $(".royalSlider").royalSlider({
//         controlsInside: false,
//         slideSpacing: 0,
//         autoScaleSliderHeight: 450,
//         autoScaleSlider: true,
//         imageScaleMode: 'fill',
//         keyboardNavEnabled: true,
//         numImagesToPreload: 1


//     });  
// });


//     }
//     else {
//         //Do Something Else
//     }
// });





/* =Toggle About
============================================================================== */

	
// $(document).ready(function() {
// $("#about-container").hide(0);
// }); // end document ready


$(document).ready(function() {
$(".toggle").click(function(){
    $("#about-container").fadeIn('fast');
    $(".close").addClass("spin");
    });
}); // end document ready



$(document).ready(function() {
$(".close").click(function(){
    $("#about-container").fadeOut('fast');
    $(".close").removeClass("spin");
    });
}); // end document ready



$(document).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $("#about-container").fadeOut('fast');
        $(".close").removeClass("spin");
    }
});




/* =background color change
============================================================================== */

$(window).scroll(function(event) {

if($("#header-cover").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    $("body").css({"background":"#242424"});
} else {
    // do nothing
}

});




$(window).scroll(function(event) {

if($(".rbmar").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    $("body").css({"background":"#242424"});
} else {
    // do nothing
}

});


$(window).scroll(function(event) {

if($(".appuous").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    $("body").css({"background":"#ffffff"});
} else {
    // do nothing
}

});



$(window).scroll(function(event) {

if($(".pt").offset().top <= $(window).scrollTop() + $(window).outerHeight()) {
    $("body").css({"background":"#f4f4f4"});
} else {
    // do nothing
}

});

$(window).scroll(function(event) {

if($(".drip").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    $("body").css({"background":"#ffffff"});
} else {
    // do nothing
}

});



$(window).scroll(function(event) {

if($(".keycard").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    $("body").css({"background":"#1d2029"});
} else {
    // do nothing
}

});


$(window).scroll(function(event) {

if($(".various-web").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    $("body").css({"background":"#303133"});
} else {
    // do nothing
}

});




/* =Header fade
============================================================================== */
 //when the DOM has loaded
    $(document).ready(function() {

        //attach some code to the scroll event of the window object
        //or whatever element(s) see http://docs.jquery.com/Selectors
        $(window).scroll(function () {
              var height = $('body').height();
              var scrollTop = $('body').scrollTop();
              var opacity = 1;

              // do some math here, by placing some condition or formula
              if(scrollTop > 400) {
                  opacity =0;
              }

              //set the opacity of div id="someDivId"
              // $('#header-cover, #header-bg').css('opacity', opacity);
              $('#header-bg').css('opacity', opacity);
        });
    });








