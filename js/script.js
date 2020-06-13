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

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    // задание всех переменных, необходимых для работы
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'), // список фильмов
        addForm = document.querySelector('form.add'), // получение формы со страницы
        addInput = addForm.querySelector('.adding__input'), // поле для ввода фильмов
        checkbox = addForm.querySelector('[type="checkbox"]'); // галочка "Да"
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // отменить стандартное поведение браузера - не перезагружать страницу

        const newFilm = addInput.value; // содержится то, что ввел пользователь
        const favorite = checkbox.checked;

        if (newFilm) {
            movieDB.movies.push(newFilm); // добавить фильм в конец массива
            sortArr(movieDB.movies); // отсортировать массив

            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        adv.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        films.forEach((film, i) => { // film - каждый отдельный фильм, i - порядковый номер фильма
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
        });
    }

    deleteAdv(adv);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);

});



