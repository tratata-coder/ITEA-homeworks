document.addEventListener("DOMContentLoaded", function (event) {
  /*
  
      Задание 2.
  
      Напишите 3 функции, которые изменяют цвет фона и цвет текста, присваивая к новым цветам
      значение из this.color, this.background.
      А также выводят картинку с иконкой на экран.
  
      1. Ф-я принимает цвет фона, а цвет текста и картинка попадают в неё через метод .call(obj)
      2. Ф-я не принимает никаких аргументов, а необходимые настройки полностью передаются через bind
      3. Ф-я принимает картинку, а объект с настройками цветов передаем через .apply();
  
  */
  const body = document.querySelector('body');
  const p = document.createElement('p')
  p.innerText = 'lalala';
  body.appendChild(p)
  const img = document.createElement('img')
  body.appendChild(img)

  let colors = {
    background: 'purple',
    color: 'white',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7eZE7l82FVMP-wq95iuPGxxlxjI5boFTLg&usqp=CAU'
  }

  function one(background) {
    body.style.color = this.color;
    body.style.background = background;
    img.src = this.src;
  }
  // one.call(colors, 'green')

  function two() {
    body.style.color = this.color;
    body.style.background = this.background;
    img.src = this.src;
  }
  let two2 = two.bind(colors);
  // two2()

  function three(src) {
    img.src = "" + src + ""
    body.style.color = this.color;
    body.style.background = this.background;
  }
  // three.apply(colors, ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DE545byowORxvtmkW2YkoRIwES2w0Ea-jw&usqp=CAU'])
});