const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const handleNav = () => {
	nav.classList.toggle('active')
	burgerBtn.classList.toggle('active')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}
burgerBtn.addEventListener('click', handleNav)

const navLinks = document.querySelectorAll('nav ul li a')

navLinks.forEach(link => {
	link.addEventListener('click', handleNav)
})

const sliderBox = document.querySelector('.slider-box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const carouselIMages = document.querySelectorAll('.slider-img')
let carouselWidth
const carouselSpeed = 5000

let index = 0

const handleCarouesl = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarouesl, carouselSpeed)

const changeImage = () => {
	if (index > carouselIMages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselIMages.length - 1
	}

	sliderBox.style.transform = `translateX(${-index * 100}%)`
}

const handleRightBtn = () => {
	index++
	resetInterwal()
}
const handleLeftBtn = () => {
	index--
	resetInterwal()
}

const resetInterwal = () => {
	changeImage()
	clearInterval(startCarousel)
	startCarousel = setInterval(handleCarouesl, carouselSpeed)
}

rightBtn.addEventListener('click', handleRightBtn)
leftBtn.addEventListener('click', handleLeftBtn)

window.addEventListener('resize', function () {
	carouselWidth = sliderBox.offsetWidth
	changeImage()
})

window.onload = function () {
	carouselWidth = sliderBox.offsetWidth
	changeImage()
}

let hammer = new Hammer(sliderBox)
hammer.on('swipeleft', function () {
	let currentSlide = document.querySelector('.slider-img')

	let nextSlide = currentSlide.nextElementSibling

	if (!nextSlide) {
		nextSlide = document.querySelector('.slider-img:first-child')
	}

	currentSlide.classList.remove('active')
	nextSlide.classList.add('active')
})

hammer.on('swiperight', function () {
	let currentSlide = document.querySelector('.slider-img')

	let prevSlide = currentSlide.previousElementSibling

	if (!prevSlide) {
		prevSlide = document.querySelector('.slider-img')
	}

	currentSlide.classList.remove('active')
	prevSlide.classList.add('active')
})