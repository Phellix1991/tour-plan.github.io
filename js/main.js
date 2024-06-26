const hotelSlider = new Swiper('.hotel-slider', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.hotel-slider__button--next',
		prevEl: '.hotel-slider__button--prev',
	},

	effect: 'coverflow',

	keyboard: {
		enabled: true,
	},
})

const reviewsSlider = new Swiper('.reviews-slider', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.reviews-slider__button--next',
		prevEl: '.reviews-slider__button--prev',
	},

	keyboard: {
		enabled: true,
	},
})

// mobile menu
let menuBottom = document.querySelector('.menu-bottom')
menuBottom.addEventListener('click', function () {
	console.log('Клик по кнопке меню')
	document
		.querySelector('.navbar-bottom')
		.classList.toggle('navbar-bottom--visible')
})
