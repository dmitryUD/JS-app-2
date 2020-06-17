/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('input[type="checkbox"]');
    // addButton = addForm.querySelector("button");

// ОСНОВА
addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newFilm = addInput.value;

    if (newFilm) {
        if (newFilm.length > 21) {
            let NewFilm = newFilm.substring(0, 21) + '...';
            movieDB.movies.push(NewFilm);
            addingFilm();
            addForm.reset();
        } else {
            movieDB.movies.push(newFilm);
            addingFilm();
            addForm.reset();
        }
    } 
});

function deleteAdv() {
    adv.forEach(item => {
        item.remove();
    });
}

function editGenre() {
    genre.textContent = "Драма";
}

function editPoster() {
    poster.style.backgroundImage = 'url("img/bg.jpg")';
}

function addingFilm() {
    movieList.innerHTML = ''; // очищение элемента (блока)
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => { // film - каждый отдельный фильм, i - порядковый номер фильма
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
    });
}


addingFilm();
editGenre();
editPoster();
deleteAdv();
    