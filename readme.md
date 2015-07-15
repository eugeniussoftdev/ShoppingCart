Подготовка к работе
===================

Необходимые инструменты
-----------------------

1. Убедитесь, что в системе установлен **git**. Если нет - [установите](http://git-scm.com/)

2. Убедитесь, что в системе установлен **[nodeJS](https://nodejs.org/)**

3. Для работы вам также нужны **[bower](http://bower.io/)** и **[gulp](http://gulpjs.com/)**. Если они еще не установлены, воспользуйтесь командой
   `npm install -g bower gulp`
   Используйте `sudo` для unix-систем

Установка
---------

1. Зайти под своим пользователем на [https://github.com/syrota/ng-lectures]

2. Нажмите fork - теперь у вас есть своя копия

3. Склонируйте копию локально
   `git clone https://github.com/<--YOUR USER NAME-->/ng-lectures`

4. Запустите в каталоге проекта:
   `npm install`

Быстрая разработка
------------------

1. Установите себе [LiveReload для Google Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/related)
   При каждом сохранении файла страница браузера будет моментально обновляться

Качество кода
-------------

- **Sublime text**: [Sublime-JSHint](https://github.com/victorporof/Sublime-JSHint)

- **Webstorm**: на вкладке "preferences > Languages & Frameworks > JavaScript > Code Quality Tools > JS Hint" поставить галочки *enabled* и *use config files*


Разработка
==========

1. Выполните комманду `gulp` в директории проекта - она запустит локальный сервер

2. Зайдите на [localhost:3000](http://localhost:3000)


Структура проекта
=================

* `src/` исходники проекта - только наш код, без библиотек. Все исходники разбиты на подпапки, группированы по функционалу, а не по технологиям

    + `products-list/` - всё, что касается списка продуктов
        * `products-list.json` - наш список продуктов
        * `products-list.service.js` - сервис - отвечает за получение данных от сервера
        * `products-list.js` - контроллер - в нем должны быть данные, которые мы отображаем в шаблоне
        * `products-list.css` - стили
        * `products-list.html` - шаблон

    + `shopping-cart/` - всё о корзине
        * `shopping-cart.ctrl.js` - контроллер
        * `shopping-cart.css` - стили
        * `shopping-cart.html` - шаблон

    + `search-form/` - форма поиска

    + `index.html` - основной html файл
    + `app.module.js` - наш модуль

После выполнения комманды `gulp` все css js


Update
======
`git pull https://github.com/syrota/ng-lectures`

Commit
======
`git commit -a -m "<--- YOUR COMMENT --->"`
