document.addEventListener('DOMContentLoaded', () => {
const ul = document.createElement('ul');
document.querySelector('body').appendChild(ul);

function fetchhm(id) {

  let url = "http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2"
  let second_url = "http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2"
  let options = {}

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      return fetch(second_url, { method: "POST" })
        .then(res => res.json())
        .then(res => {
          let a = data[id]
          a.friends = res[0].friends.map(item => ' ' + item.name)
          for (key in a) {
            let li = document.createElement('li');
            ul.appendChild(li)
            li.innerText = `${key}: ${a[key]}`
          }
        })
    })
}

fetchhm(5)
/*
  Задача:

  1. При помощи fetch получить данные:
    http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
    http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
    И дальше передать обьект:
      {
        name: userName,
        company: userCompany,
        gender: userGender,
        ...
        friends: friendsData
      }

    Подсказка нужно вызвать дополнительный fecth из текущего чейна.
    Для того что бы передать результат выполнения доп. запроса
    в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/
});
