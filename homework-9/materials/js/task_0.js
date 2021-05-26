/*

    Задание на работу с модулями.

    Необходимо подлючить и настроить вебпак на чистый проект и создать в нём следующую структуру файлов:

    src
    | modules
    |- index.js <-- Использовать файл index для реалзиации паттерна с именным импортом через одну точку входа для всех модулей.
    | index.js <-- Точка входа в приложение
    public
    | js
    | css
    | index.html
    package.json

    В них создать файлы заглушки и использовать все следующие типы импортов:
    import defaultExport from "module-name";
    import * as name from "module-name";
    import { export } from "module-name";
    import { export as alias } from "module-name";
    import { export1 , export2 } from "module-name";
    import { export1 , export2 as alias2 } from "module-name";
    import defaultExport, * as name from "module-name";
    import "module-name";

*/