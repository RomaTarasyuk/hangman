var numberOfFilms = prompt("Скільки фільмів Ви вже переглянули ?", ""); // Запит до користувача

var personalMovieDB = { // Головний об'єкт
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

var a = prompt("Один з останніх переглянутих фільмів ?", ""), // запити до користувача
    b = prompt("На скільки його оціните ?", ""),
    c = prompt("Один з останніх переглянутих фільмів ?", ""),
    d = prompt("На скільки його оцінете ?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);