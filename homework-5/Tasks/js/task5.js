document.addEventListener("DOMContentLoaded", function (event) {
  const div = document.createElement('div');
  div.style.cssText = 'width: 800px; padding: 30px; background-color: aqua;'
  document.querySelector('body').appendChild(div);

  function Comment(name, text, src) {
    name;
    text;
    src;
    this.create = function () {
      let divForCom = document.createElement('div');
      divForCom.style.cssText = 'width: 400px; margin: 30px;  display: flex;';
      div.appendChild(divForCom);
      let avatar = document.createElement('img');
      avatar.style.cssText = 'width: 100px; height: 100px; margin-right: 20px;'
      avatar.src = src || this.src;
      divForCom.appendChild(avatar);
      let div2 = document.createElement('div');
      divForCom.appendChild(div2)
      let userName = document.createElement('span');
      userName.style.cssText = 'font-size: 18px; font-weight: 700;'
      userName.innerText = name;
      div2.appendChild(userName);
      let comment = document.createElement('p');
      comment.innerText = text;
      div2.appendChild(comment);
      let likeSpan = document.createElement('span')
      likeSpan.className = '_like'
      likeSpan.innerText = `like ${this.like}`;
      div2.appendChild(likeSpan);
      likeSpan.addEventListener('click', a = () =>
        likeSpan.innerText = `like ${this.addLike()}`,
      )
    }
  }

  let someProto = {
    src: "./image/25261.jpg",
    like: 0,
    addLike: function () {
      return this.like += 1;
    }
  }

  const CommentsArray = []

  let myComment1 = new Comment('Anna', 'Написать конструктор объекта комментария который принимает 3 аргумента имя, текст сообщения, ссылка на аватаку', './image/91640574.png');
  let myComment2 = new Comment('Alex', 'Создать прототип, в котором будет содержаться ссылка');
  let myComment3 = new Comment('Eva', 'Создать функцию, которая принимает массив комментариев');
  let myComment4 = new Comment('Evgen', ' У каждого комментария должна быть кнопка', './image/unnamed.jpg');

  Object.setPrototypeOf(myComment1, someProto)
  Object.setPrototypeOf(myComment2, someProto)
  Object.setPrototypeOf(myComment3, someProto)
  Object.setPrototypeOf(myComment4, someProto)

  CommentsArray.push(myComment1)
  CommentsArray.push(myComment2)
  CommentsArray.push(myComment3)
  CommentsArray.push(myComment4)
  // как автоматически добавить не разовралась, хотелось бы услышать как это делается

  function comentFunction() {
    CommentsArray.forEach(function (elem) {
      elem.create()
    })
  }

  comentFunction()

  /*
  
    Задание:
  
      1. Написать конструктор объекта комментария который принимает 3 аргумента
      ( имя, текст сообщения, ссылка на аватаку);
  
      {
        name: '',
        text: '',
        avatarUrl: '...jpg'
        likes: 0
      }
  
      2. Создать прототип, в котором будет содержаться ссылка на картинку по умолчанию, а
      так же метод который увеличивает счетчик лайков.
  
      let myComment1 = new Comment(...);
  
      3. Создать массив из 4х комментариев.
      (Подумайте, как их туда можно добавить в автоматическом режиме имея только массив)
      var CommentsArray = [myComment1, myComment2...]
  
      4. Создать функцию, которая принимает массив комментариев.
      И выводит каждый из них на страничку.
  
      Бонус:
      4. У каждого комментария, должна быть кнопка, при нажатии на которую будет вызываться метод
      addLike() и перересовыватся кол-во лайков на уже отрисованом комменте.
  */
});