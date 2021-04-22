/*
	Задание написать простой слайдер.

	Есть массив с картинками из которых должен состоять наш слайдер.
	По умолчанию выводим первый элемент нашего слайдера в блок с id='slider'
	( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
	По клику на PrevSlide/NextSlide показываем предыдущий или следующий слайд соответственно.

	Для этого необходимо написать 4 функции которые будут:

	1. Срабатывать на событие load объекта window и загружать наш слайд по умолчанию.
	2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
	3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
	4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
		+ бонус сделать так чтобы при достижении последнего и первого слайда вас после кидало на первый и последний слайд соответственно.
		+ бонсу анимация появления слайдов через навешивание дополнительных стилей

*/
document.addEventListener("DOMContentLoaded", function(event) {

	let OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
	let currentPosition = 0;
	const slider = document.getElementById('slider');
	const next = document.getElementById('NextSilde');
	const prev = document.getElementById('PrevSilde');

	window.addEventListener('load', function(){
		createImage();
	});

	prev.addEventListener('click', RenderImage, false);
	next.addEventListener('click', RenderImage, false);

	function RenderImage(event){
		let nameOfBtn = event.target.id;
		if(nameOfBtn === 'NextSlide'){
			NextSlide()
		}else{
			PrevSlide()
		}
		removeImg();
		createImage();
	}

	let NextSlide = function(){
		currentPosition++;
		if(currentPosition === OurSliderImages.length){
			currentPosition = 0;
		}
		return currentPosition;
	}

	let PrevSlide = function(){
		currentPosition--;
		if(currentPosition === -1){
			currentPosition = OurSliderImages.length - 1;
		}
		return currentPosition;
	}

	function createImage(){
		let img = document.createElement('img');
		img.src = OurSliderImages[currentPosition];
		img.style = 'width: 300px';
		slider.appendChild(img);
	}

	function removeImg(){
		let img = slider.querySelector('img');
		slider.removeChild(img);
	}

	// 	Я СНАЧАЛА ТАК РЕШИЛА. НО ЭТО БЫЛО-БЫ НЕПРАВИЛЬНО?

	// window.addEventListener('load', function(){
	// 	createImage();
	// });

	// let NextSlide = function(){
	// 	currentPosition++;
	// 	if(currentPosition === OurSliderImages.length){
	// 		currentPosition = 0;
	// 	}
	// 	RenderImage();
	// }
	// next.addEventListener('click', NextSlide, false);

	// let PrevSlide = function(){
	// 	currentPosition--;
	// 	if(currentPosition === -1){
	// 		currentPosition = OurSliderImages.length - 1;
	// 	}
	// 	RenderImage();
	// }
	// prev.addEventListener('click', PrevSlide, false);

	// function RenderImage(){
	// 	let img = slider.querySelector('img');
	// 	slider.removeChild(img);
	// 	createImage();
	// }

	// function createImage(){
	// 	let img = document.createElement('img');
	// 	img.src = OurSliderImages[currentPosition];
	// 	img.style = 'width: 300px';
	// 	slider.appendChild(img);
	// }
});