const burger = document.getElementById('burger-menu')
const mobileMenu = document.getElementById('mobile-menu')
const header = document.getElementById('header')

// Показ и скрытие мобильного меню при нажатии на бургер
burger.addEventListener('click', () => {
	mobileMenu.classList.toggle('active')
	burger.classList.toggle('open')
})

// Изменение прозрачности меню при прокрутке
window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		header.classList.add('scrolled')
	} else {
		header.classList.remove('scrolled')
	}
})

// ------------

document.addEventListener('DOMContentLoaded', () => {
	const sections = document.querySelectorAll('section') // находим все секции на странице
	const navLinks = document.querySelectorAll('.nav-links a')
	const mobileLinks = document.querySelectorAll('.mobile-menu a')

	// Функция для удаления класса "active" у всех ссылок
	function removeActiveClass() {
		navLinks.forEach((link) => link.classList.remove('active'))
		mobileLinks.forEach((link) => link.classList.remove('active'))
	}

	// Функция для добавления класса "active" на текущую ссылку
	function addActiveClass(link) {
		removeActiveClass()
		link.classList.add('active')
	}

	// Функция для отслеживания прокрутки и определения активной секции
	function handleScroll() {
		let current = ''

		sections.forEach((section) => {
			const sectionTop = section.offsetTop
			const sectionHeight = section.clientHeight
			if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
				current = section.getAttribute('id')
			}
		})

		// Перекрашиваем ссылки в навигации
		navLinks.forEach((link) => {
			if (link.getAttribute('href').includes(current)) {
				addActiveClass(link)
			}
		})

		// Перекрашиваем ссылки в мобильном меню
		mobileLinks.forEach((link) => {
			if (link.getAttribute('href').includes(current)) {
				addActiveClass(link)
			}
		})
	}

	// Добавляем событие на скролл
	window.addEventListener('scroll', handleScroll)

	// Отслеживаем клик по ссылкам в меню для изменения активной ссылки
	navLinks.forEach((link) => {
		link.addEventListener('click', function () {
			addActiveClass(this)
		})
	})

	mobileLinks.forEach((link) => {
		link.addEventListener('click', function () {
			addActiveClass(this)
		})
	})
})
