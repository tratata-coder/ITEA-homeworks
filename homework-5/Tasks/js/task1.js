document.addEventListener("DOMContentLoaded", function (event) {

    /*
    
        Задание 1:
    
        Написать объект Train у которого будут свойства:
        -имя,
        -скорость езды
        -количество пассажиров
        Методы:
        Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
        Стоять -> Поезд {name} остановился. Скорость {speed}
        Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
    */
    const Train = {
        name: 'intercity',
        speed: 150,
        passengers: 0,
        drive: function () {
            Train.speed = 120
            console.log('Поезд ' + this.name + ' везет ' + this.passengers + ' пасажиров со скоростью ' + this.speed);
        },
        pick: function () {
            this.passengers += 10;
            console.log(`Количество пассажиров в поезде ${this.name} ${this.passengers} человек.`)
        },
        stand: function () {
            this.speed = 0;
            this.passengers -= 10;
            console.log('Поезд ' + this.name + ' остановился. Скорость ' + this.speed);
        }
    }
    Train.drive()
    Train.pick()
    Train.pick()
    Train.stand()
    Train.pick()
});