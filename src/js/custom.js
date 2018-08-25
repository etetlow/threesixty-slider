function init(content) {

	/*----------------------------------------------------
	    N A V I G A T I O N
	------------------------------------------------------*/

	$(document).on('click', '#trigger', function (event) {
		event.preventDefault();
		$('nav').toggleClass('menushow');
		$('#trigger span').toggleClass('active');
	});

	$(document).on('click', '.nav-links li a', function() {
		$('nav').removeClass('menushow');
		$('.trigger span').removeClass('active');
	});

	/*---------------------------------------------------
	    M O R E  E X A M P L E S
	---------------------------------------------------==*/

	if ($('.armani').length > 0) {
		var armani = $('.armani').ThreeSixty({
			totalFrames: 12,
			endFrame: 12,
			currentFrame: 1,
			imgList: '.threesixty_images',
			progress: '.spinner',
			imagePath: 'assets/armani-bag/',
			filePrefix: 'armani-bag-large-01-',
			ext: '.jpg',
			width: 1000,
			height: 1009,
			fSBackgroundColor: '#fff',
			navigation: false,
			fullscreen: true,
			responsive: true,
			disableSpin: false,
			zeroPadding: true
		});

		$('.custom-play').on('click', function () {
			armani.play();
		});

		$('.custom-stop').on('click', function () {
			armani.stop();
		});

		$('.custom-next').on('click', function () {
			armani.next();
		});

		$('.custom-back').on('click', function () {
			armani.previous();
		});

		$('.custom-fullscreen').on('click', function () {
			armani.fullscreen();
		});
	}

	if ($('.car').length > 0) {
		var car = $('.car').ThreeSixty({
			totalFrames: 52,
			endFrame: 43,
			currentFrame: 1,
			imgList: '.threesixty_images',
			progress: '.spinner',
			imagePath: 'assets/car/',
			filePrefix: '',
			ext: '.png',
			height: 447,
			width: 1000,
			navigation: true,
			position: 'bottom-center',
			fullscreen: true,
			fSBackgroundColor: '#fff',
			responsive: true,
			disableSpin: false,
			zeroPadding: false
		});
	}
}

$(document).ready(function () {

	init('body');

	(function() {	
		var nav1 = $('.slim-links li a'),
			nav2 = $('.nav-links li a'),
			section = $('#vertigo .section'),
			secNo = section.length,
			position = [],
			y = '',
			z = '';
			

		$(window).scroll(function() {
			var scrNo = window.pageYOffset;

			for (y=0; y < secNo; y++) {
				var target = section.eq(y).attr('id');
				position.push($('#' + target).offset().top);
			}
		
			for (z=0; z < secNo; z++) {
				if (scrNo >= (position[z])) {
					section.removeClass('active');
					nav1.removeClass('active');
					nav2.removeClass('active');
					section.eq(z).addClass('active');
					nav1.eq(z).addClass('active');
					nav2.eq(z).addClass('active');
				}
			}
		});
	})();

	// Select all links with hashes
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(':focus')) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					}
				});
			}
		}
	});

	$(document).on('click', '.ajaxSlider', function () {
		var whichOne = $(this).data('selection'),
			imgTot = $(this).data('number'),
			string = '<div class="' + whichOne + ' threesixty"><div class="spinner"><span>0%</span></div><ol class="threesixty_images"></ol></div>';

		$('.overlay').fadeIn('slow', function () {
			$('.ajaxLoad').html(string);
			var ajaxLoad = $('.' + whichOne).ThreeSixty({
				totalFrames: imgTot,
				endFrame: imgTot,
				currentFrame: 1,
				imgList: '.threesixty_images',
				progress: '.spinner',
				imagePath: 'assets/' + whichOne + '/',
				filePrefix: whichOne + '-',
				ext: '.png',
				height: 405,
				width: 720,
				navigation: true,
				position: 'bottom-center',
				fullscreen: true,
				responsive: true,
				disableSpin: false,
				autoplayDirection: -1,
				zeroPadding: true
			});
		});
	});

	$(document).on('click', '.ajaxVideo', function () {
		var whichOne = $(this).data('selection'),
			string = '<div class="' + whichOne + '"><video width="720" height="405" controls autoplay><source src="assets/' + whichOne + '/' + whichOne + '.mp4" type="video/mp4"><p>Your browser does not support HTML5 video. Click <a href="assets/' + whichOne + '/' + whichOne + '.mp4">here to download</a> .</p></video></div>';
		$('.overlay').fadeIn('slow', function () {
			$('.ajaxLoad').html(string);
		});
	});

	$(document).on('click', '.close', function () {
		$('.overlay').fadeOut('fast');
		$('.ajaxLoad').empty();
	});
});
