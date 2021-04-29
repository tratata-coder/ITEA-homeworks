document.addEventListener("DOMContentLoaded", function (event) {
  /*
  
      Задание 3:
  
      1. Создать ф-ю конструктор которая создаст новую собаку у которой есть имя и порода
      2. Объект должен иметь пару свойств (Имя, порода, status)
      3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
      4. Функция которая перебором выводит все свойства
  
  
      Dog {
        name: '',
        breed: '',
        status: 'idle',
  
        changeStatus: function(){...},
        showProps: function(){...}
      }
  
      Перебор свойств и методов объекта
      for (key in obj) {
        console.log( key, obj[key] );
        /* ... делать что-то с obj[key] ...
      }
  */


  function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.status = 'happy',
      this.changeStatus = function () {
        this.status = 'sad';
      },
      this.run = function () {
        this.status = 'run'
      }
    this.showProps = function () {
      for (key in this) {
        console.log(key, this[key]);
      }
    }
  };

  let firstDog = new Dog('Sharik', 'picines')
  firstDog.age = 10;
  firstDog.showProps()
});