const sliderWrapper = document.querySelector('.slider-wrapper')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let currentSlide = 0

function showSlide(index) {
	if (index >= slides.length) {
		currentSlide = 0
	} else if (index < 0) {
		currentSlide = slides.length - 1
	} else {
		currentSlide = index
	}

	// Перемещаем слайдер по горизонтали
	sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`

	// Обновляем активные точки пагинации
	dots.forEach((dot) => dot.classList.remove('active'))
	dots[currentSlide].classList.add('active')
}

// Добавляем обработчики событий для точек пагинации
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		showSlide(index)
	})
})

// Добавляем обработчики для стрелок
prevBtn.addEventListener('click', () => {
	showSlide(currentSlide - 1)
})

nextBtn.addEventListener('click', () => {
	showSlide(currentSlide + 1)
})

// Функция автоматического переключения слайдов
// setInterval(() => {
// 	showSlide(currentSlide + 1)
// }, 5000) // 5 секунд
