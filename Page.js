$(document).ready(function () {
	$('.slide').slick({
		cssEase: 'linear',
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	});
	$('.slide1').slick({
		cssEase: 'linear',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false
	});
	$('.slide2').slick({
		cssEase: 'linear',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		appendArrows: $("#slick-arrows"),
	});
});