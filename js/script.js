/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'); 

// Задание 1 - удаление рекламных блоков справа
adv.forEach(item => {
    item.remove();
});
// adv.forEach(function(item) {
//     item.remove();
// });
// 2
// for (let i = 0; i < adv.length; i++) {
//     adv[i].remove();
// }

// Задание 2
genre.textContent = "Драма";

// другой способ
// genre.innerHTML = 'Драма';

// Задание 3
poster.style.backgroundImage = 'url("img/bg.jpg")';

// Задание 4
movieList.innerHTML = ''; // очищение элемента (блока)
movieDB.movies.sort(); // сортировка по алфовиту

// Задание 5 - сформировать верстку при помощи JS и загрузить ее на страницу
movieDB.movies.forEach((film, i) => { // film - каждый отдельный фильм, i - порядковый номер фильма
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;
});






