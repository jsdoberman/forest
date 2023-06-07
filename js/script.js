$(document).ready(function($){

	$('.slider-khid-budivn').slick({
  		infinite: true,
  		slidesToShow: 3,
		dots: true,
			responsive: [
			{
			breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			
			{
			breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			
		]

	});



	$('.big-slider-block').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				arrows: false,
			}
			},
			
		]
	});


	$('.planning-tabs-slider-1').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
			breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
			breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
			breakpoint: 660,
				settings: {
					slidesToShow: 1,
				}
			},
			{
			breakpoint: 400,
				settings: {
					slidesToShow: 1,
				}
			},
			{
			breakpoint: 320,
				settings: {
					slidesToShow: 1,
				}
			},
			
		]
	});

	





window.addEventListener('DOMContentLoaded', function() {

/* Показ цепочки попапов в разделе "Преимущества" - Нажатие кнопок "детальніше" */
	const modalLink = document.querySelectorAll('.modallink'),
			modalLinkParetn = document.querySelector('.benefit__block'),
			benefitPopUpClose = document.querySelectorAll('.benefit-mod-more-info__block-close'),
			benefitPopUp = document.querySelectorAll('.benefit-mod-more-info'),
			benefitContactBtn = document.querySelectorAll('.benefit-mod-more-info__block-btn'),
			contactForm = document.querySelector('.contact-popup-form'),
			contactFormClose = document.querySelector('.contact-popup-form__block-close'),
			roomDatailBnt = document.querySelectorAll('.room-item__btn');


			const btnParent = document.querySelector('.planning-tabs__tab'), //Родитель для кнопок переключения окон.
			btns = document.querySelectorAll('.planning-tabs__tab-item'), // Кнопки переключения окон.
			tabs = document.querySelectorAll('.slider-wraper'); //Переключаемые окна.
	
					function hideTabs() {
						btns.forEach(function(item) { //Скрываем класс активности
							item.classList.remove('planning-tabs__tab-item_active');
						});
					
						tabs.forEach(function(item) { // Скрываем все табы
							item.classList.remove('slider-wraper_active');
						});
					}
					hideTabs();
	
				function showElements(i = 0) {
					tabs[i].classList.add('slider-wraper_active'); // По умолчанию показываем первый таб.
					btns[i].classList.add('planning-tabs__tab-item_active'); // И у первой кнопки ставим класс активности.
				
					/* Инициализация второго слайдера */
					if($('.planning-tabs-slider-2').is(':visible')){
						console.log('vis ');
						$('.planning-tabs-slider-2').slick({
							infinite: true,
							slidesToShow: 4,
							slidesToScroll: 1,			
								responsive: [
									{
									breakpoint: 1200,
										settings: {
											slidesToShow: 3,
										}
									},
									{
									breakpoint: 992,
										settings: {
											slidesToShow: 2,
										}
									},
									{
									breakpoint: 768,
										settings: {
											slidesToShow: 2,
										}
									},
									{
									breakpoint: 660,
										settings: {
											slidesToShow: 1,
										}
									},
									{
									breakpoint: 400,
										settings: {
											slidesToShow: 1,
										}
									},
									{
									breakpoint: 320,
										settings: {
											slidesToShow: 1,
										}
									},	
								]
						});
					} 
				}
				showElements();

	
			btnParent.addEventListener('click', function(event){  //Вешаем делегирование событий на дочерние элементы btns.
	
			if (event.target && event.target.classList.contains('planning-tabs__tab-item')) { //Событие на дочерние элементы.
				btns.forEach(function(item, i){     //перебираем элементы на которые кликают
					if (event.target == item){ //Сравниваем элемент на который кликнули с кнопками переключения окон (отлавливаем, на какой элемент кликнули)
						hideTabs();
						showElements(i); // Передаем i - порядковый номер в функцию, чтобы присвоился класс активности элементу И показался слайд под тем же нмоером.
					}
				});
			} 
	});




			modalLinkParetn.addEventListener('click', function(event){
				event.preventDefault();

				if (event.target && event.target.classList.contains('modallink')){
					modalLink.forEach(function(item, i) {
						if(event.target == item){
							benefitPopUp[i].style.display = 'flex';
							document.body.style.overflow = 'hidden';
						}
					});
				}				
			});

			benefitPopUpClose.forEach(function(close, j) {
				close.addEventListener('click', function(e){
					benefitPopUp[j].style.display = 'none';
					document.body.style.overflow = '';
					});
			});

			benefitContactBtn.forEach(function(btn, k) {
				btn.addEventListener('click', function(event){
					event.preventDefault();

					benefitPopUp[k].style.display = 'none';
					contactForm.style.display = 'flex';


				});
			});

			contactFormClose.addEventListener('click', function(){
				contactForm.style.display = 'none';
				document.body.style.overflow = '';  //Дозволяємо скрол сторінки , після закриття попапа
			});


			/* Кнопка Детальніше на карточке квартиры */
			roomDatailBnt.forEach(function(btn, g) {
				btn.addEventListener('click', function(event){
					event.preventDefault();
					contactForm.style.display = 'flex';
					document.body.style.overflow = 'hidden';  //Блокуемо скрол сторінки під попапом

				});
			});






	
});

/* Меню */
				const menu = document.querySelector('.header__wrapper'),
				menuItem = document.querySelectorAll('.header__menu-item'),
				hamburger = document.querySelector('.humburger');

				hamburger.addEventListener('click', () => {
					hamburger.classList.toggle('humburger_active');
					menu.classList.toggle('header__wrapper_active');
				});

				menuItem.forEach(function(item) {
					item.addEventListener('click', () => {
						hamburger.classList.toggle('humburger_active');
						menu.classList.toggle('header__wrapper_active');
					});
				});

});

// =================================================Модуль анімація цифрового лічильника
//Цифри котрі мають анимуватись обгортаємо тегом з атрибутом data-digits-counter
window.addEventListener('load', windowLoad);

function windowLoad() { 

	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}

	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1000; //Час анімації
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	/* Пуск при завантажені сторінки */
	//digitsCountersInit();

	//--------Пуск при скролі до блока:
		let options = {
			threshold: 0.5
		};

		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					const targetElement = entry.target;
					const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
					if (digitsCountersItems.length) {
						digitsCountersInit(digitsCountersItems);
					}
					//Вимкнути після спрацювання
					//observer.unobserve(targetElement);
				}
			});
		}, options);

		let sections = document.querySelectorAll('.about-dev__item') //Батьківський єлемент, який з'являється на екрані
		if(sections.length) {
			sections.forEach(section => {
				observer.observe(section);
			});
		}
 } 


 /* =========================================================== Движение элементов по прокрутке страницы */

/* -------------------------------------------Движение ввурх */
function onEntryToTop(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('to-top'); //Добавляем класс активности
		} /* else change.target.classList.remove('to-top'); */ // Оставляем - будет срабатывать каждый раз
	});
}

let optionsToTop = {
		threshold: [0.5] 
};

let observerToTop = new IntersectionObserver(onEntryToTop, optionsToTop); 
let elementsToTop = document.querySelectorAll('.to-top_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsToTop) { 
	observerToTop.observe(elm); 
}

/* ---------------------------------------Движение слева на право */
function onEntryLeftToRight(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('left-to-right'); //Добавляем класс активности
		} /* else change.target.classList.remove('left-to-right'); */ // Оставляем - будет срабатывать каждый раз
	});
}

let optionsLeftToRight = {
		threshold: [0.5] 
};

let observerLeftToRight = new IntersectionObserver(onEntryLeftToRight, optionsLeftToRight); 
let elementsLeftToRight = document.querySelectorAll('.left-to-right_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsLeftToRight) { 
	observerLeftToRight.observe(elm); 
}

/* ---------------------------------------Движение справа на лево */
function onEntryRightToLeft(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('right-to-left'); //Добавляем класс активности
		} /* else change.target.classList.remove('right-to-left');  */// Оставляем - будет срабатывать каждый раз
	});
}

let optionsRightToLeft = {
		threshold: [0.5] 
};

let observerRightToLeft = new IntersectionObserver(onEntryRightToLeft, optionsRightToLeft); 
let elementsRightToLeft = document.querySelectorAll('.right-to-left_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRightToLeft) { 
	observerRightToLeft.observe(elm); 
}

/* ---------------------------------------Движение поворот */
/* function onEntryRotate(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('rotate'); //Добавляем класс активности
		} else change.target.classList.remove('rotate'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsRotate = {
		threshold: [0.5] 
};

let observerRotate = new IntersectionObserver(onEntryRotate, optionsRotate); 
let elementsRotate = document.querySelectorAll('.rotate_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRotate) { 
	observerRotate.observe(elm); 
} */
