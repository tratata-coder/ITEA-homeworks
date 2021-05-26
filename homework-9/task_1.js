/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/
const btn = document.createElement('button')
btn.innerHTML = 'Click'
document.querySelector('body').appendChild(btn)

btn.addEventListener('click', ()=>{
    let color = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    localStorage.setItem('color', color );
})

function randomColor(){
    return Math.floor(Math.random() * 255) +1;
}