//  НЕ ЗНАЮ НАСКОЛЬКО ПРАВИЛЬНО Я ПОНЯЛА ЗАДАНИЯ, ЕСЛИ ЧТО МОГУ ПЕРЕДЕЛАТЬ

function randomColor(red, green, blue) {
red = Math.floor(Math.random() * 255) +1;
red = red.toString(16);
green = Math.floor(Math.random() * 255) +1; 
green = green.toString(16);
blue = Math.floor(Math.random() * 255) +1; 
blue = blue.toString(16);
let color = `#${red}${green}${blue}`;
document.body.style.background = color;
div.innerText = color;
}


// кнопка для смены цвета

let app = document.getElementById('app');
app.setAttribute('style', 'display: flex; justify-content: center; align-items: center; height: 100vh;')
let button = document.createElement('button');
button.setAttribute("style", "background: red; width: 200px; height: 50px; margin: 20px");
button.setAttribute('onclick', 'randomColor()');
button.innerText = 'Change color'
app.appendChild(button);


// выводим полученый цвет

let div = document.createElement('div');
div.setAttribute('style', 'font-size: 1.7rem;');
app.appendChild(div);


/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
console.log("🚀 ~ randomColor", randomColor)
console.log("🚀 ~ randomColor();", randomColor();)
console.log("🚀 ~ randomColor();", randomColor();)
console.log("🚀 ~ randomColor", randomColor)
console.log("🚀 ~ randomColor()", randomColor())
console.log("🚀 ~ randomColor()", randomColor())
console.log("🚀 ~ randomColor()", randomColor())
console.log("🚀 ~ randomColor()", randomColor())
console.log("🚀 ~ randomColor()", randomColor())
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb
*/
