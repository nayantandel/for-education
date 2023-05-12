
// Mobile menu Js
$(document).ready(function(){
  $(".toggle-icon").click(function(){
      $('body').addClass('mobile-menu-open');
  });
  $(".close-btn").click(function(){
      $('body').removeClass('mobile-menu-open');
  });
});
// End Mobile menu Js

// Header Search Bar Js
$(document).ready(function(){
    $(".search-close-btn").click(function(){
        $(".header-search-main").slideUp();
    });
    $(".search-link").click(function(){
        $(".header-search-main").slideDown();
    });
});
// End Header Search Bar Js

// Sticky Header
$(window).scroll(function() {
    jQuery(this).scrollTop() > 10 ? jQuery(".site-header").addClass("sticky") : jQuery(".site-header").removeClass("sticky")
})
// End Sticky Header

// Upcoming Counter
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let daysSpan = clock.querySelector(".days");
    let hoursSpan = clock.querySelector(".hours");
    let minutesSpan = clock.querySelector(".minutes");
    let secondsSpan = clock.querySelector(".seconds");
  
    function updateClock() {
      let t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  const deadline = "February 5 2023";
  initializeClock("countdown", deadline);
// End Upcoming Counter

//Equal height 
var matchHeight = function () {
	function init() {
		eventListeners();
		matchHeight();
	}
	function eventListeners(){
		$(window).on('resize', function() {
			matchHeight();
		});
	}
	function matchHeight(){
		var groupName = $('[data-match-height]');
		var groupHeights = [];
		groupName.css('min-height', 'auto');
		groupName.each(function() {
			groupHeights.push($(this).outerHeight());
		});
		var maxHeight = Math.max.apply(null, groupHeights);
		groupName.css('min-height', maxHeight);
	};
	return {
		init: init
	};
} ();

$(document).ready(function() {
	matchHeight.init();
});
// End Equal height 

// Mobile Footer Accordioan
$(document).ready(function($) {
    if ($(window).width() < 640) {
       $('.group-item h5').click(function () {
        $(this).parent().find('.footer-nav').slideToggle();
        $(this).parent().siblings().find('.footer-nav').slideUp();
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().removeClass('active');
    });
  }
});
// End  Mobile Footer Accordioan