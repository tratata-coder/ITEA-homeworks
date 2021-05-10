document.addEventListener('DOMContentLoaded', () => {

  const nameInput = document.querySelector('input[name = name]')
  const ageInput = document.querySelector('input[name = age]')
  const passwordInput = document.querySelector('input[name = password]')
  const stringInput = document.querySelector('input[name = string]')
  const button1 = document.querySelector('.btn1')
  const button2 = document.querySelector('.btn2')

  let obj = {};

  button1.addEventListener('click', function () {
    obj.name = nameInput.value;
    obj.age = ageInput.value;
    obj.password = passwordInput.value;
    console.log("🚀 ~ obj", JSON.stringify(obj));
  });

  button2.addEventListener('click', function () {
    let s = stringInput.value;
    console.log("🚀 ~ obj", JSON.parse(s))
  })

  /*
    Задание:
    Написать скрипт который:
      1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
    ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.
  
    Array.from(HTMLNodeColection); -> Arary
  
    <form>
      <input name="name" />
      <input name="age"/>
      <input name="password"/>
      <button></button>
    </form>
  
    <form>
      <input />
      <button></button>
    </form>
    -> '{"name" : !"23123", "age": 15, "password": "*****" }'
  
  
  */
})