/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict


var paperMenu = {
    $window: $('#paper-window'),
    $paperFront: $('#paper-front'),
    $hamburger: $('.hamburger'),
    offset: 1800,
    pageHeight: $('#paper-front').outerHeight(),
    
    open: function() {
        this.$window.addClass('tilt');
        this.$hamburger.off('click');
        $('#container, .hamburger').on('click', this.close.bind(this));
        this.hamburgerFix(true);
        console.log('opening...');
    },
    close: function() {
        this.$window.removeClass('tilt'); 
        $('#container, .hamburger').off('click');
        this.$hamburger.on('click', this.open.bind(this));
        this.hamburgerFix(false);
        console.log('closing...');
    },
    updateTransformOrigin: function() {
        scrollTop = this.$window.scrollTop();
        equation = (scrollTop + this.offset) / this.pageHeight * 100;
        this.$paperFront.css('transform-origin', 'center ' + equation + '%');
    },
    //hamburger icon fix to keep its position
    hamburgerFix: function(opening) {
            if(opening) {
                $('.hamburger').css({
                    position: 'absolute',
                    top: this.$window.scrollTop() + 30 + 'px'
                });
            } else {
                setTimeout(function() {
                    $('.hamburger').css({
                        position: 'fixed',
                        top: '30px'
                    });
                }, 300);
            }
        },
    bindEvents: function() {
        this.$hamburger.on('click', this.open.bind(this));
        $('.close').on('click', this.close.bind(this));
        this.$window.on('scroll', this.updateTransformOrigin.bind(this));
    },
    init: function() {
        this.bindEvents();
        this.updateTransformOrigin();
    },
};

$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

// $( window ).scroll(function() {   
 // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
       
 //  }  
// });




paperMenu.init();
