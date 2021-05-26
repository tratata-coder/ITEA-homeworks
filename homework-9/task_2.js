/*

    Задание 2:
    
    1) Написать форму логина ( поля: логин, пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть запись - На странице вывести "Привет {username}", если нет - вывести окно
    логина.
    2) бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина

*/
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', () => {
        let username = localStorage.getItem('username')
        !username == false ? alert(`Привет ${username}`) : createNode();
    })

    createNode = function () {
        btnExit.style.display = 'none'
        let node = document.createElement('div');
        node.innerHTML = `
    <form id="ValidationForm" class="form">
        <input class="form__input" type="text" name="login" placeholder="Ваш логин" />
        <input class="form__input" type="password" name="password" placeholder="Ваш пароль" />
        <button class="form__button" type="submit" id="submit"> Отправить </button>
	</form>
    `
        document.querySelector('body').appendChild(node)
        const btn = node.querySelector('.form__button')
        const username = node.querySelector('input[name=login]')
        const password = node.querySelector('input[name=password]')

        btn.addEventListener('click', () => {
            localStorage.setItem('username', username.value);
            localStorage.setItem('password', password.value);
        })
    }

    const btnExit = document.createElement('button');
    btnExit.innerText = 'Выйти';
    document.querySelector('body').appendChild(btnExit)

    btnExit.addEventListener('click', () => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        createNode()

    });
});
