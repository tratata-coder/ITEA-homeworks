document.addEventListener('DOMContentLoaded', function () {

    const somePosts = []

    class Posts {
        constructor(title, about, id, created_at, likes) {
            this.id = id;
            this.created_at = created_at;
            this.likes = likes;
            this.isActiv = true;
            this.title = title;
            this.about = about;
            this.node = null;
            this.addLike = this.addLike.bind(this)
            this.render();
            somePosts.push(this)
        }

        render() {
            if (this.node === null) {
                this.node = document.createElement('div')
            }
            this.node.innerHTML = `
        <h3>${this.title}</h3>
        <p>${this.about}</p>
        <span>${this.created_at}</span>
        <button class="likes" id="${this.id}">Likes ${this.likes}</button>`

            document.querySelector('body').appendChild(this.node)
            this.node.querySelector('.likes').addEventListener('click', this.addLike)

        }

        addLike() {
            this.likes += 1;
            this.render();
            JSON.parse(localPosts).map((item) => {
                if (item.id == this.id) {
                    item.likes += 1
                    localStorage.setItem('somePosts', JSON.stringify(somePosts))
                }
            })
        }
    }

    const send = document.querySelector('._send')
    const postTitle = document.getElementById('_post_title')
    const postAbout = document.getElementById('_post')

    send.addEventListener('click', () => {
        let id = new Date().getTime()
        let created_at = new Date().getHours() + ':' + new Date().getMinutes()
        new Posts(postTitle.value, postAbout.value, id, created_at, 0)
        localStorage.setItem('somePosts', JSON.stringify(somePosts))
    })

    let localPosts = localStorage.getItem('somePosts')
    // let localPosts = localStorage.removeItem('somePosts')

    if (localPosts !== null) {
        JSON.parse(localPosts).map(item => new Posts(item.title, item.about, item.id, item.created_at, item.likes))
    }
});

/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было прездагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/