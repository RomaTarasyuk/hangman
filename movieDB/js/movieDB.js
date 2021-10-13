var numberOfFilms = +prompt('Скільки фільмів Ви вже переглянули ?', ''); // запит до користувача

var personalMovieDB = { // головний об'єкт
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (var i = 0; i < 2; i++) { // цикл для повторень питнь користувачу
    var a = prompt('Один з останніх переглянутих фільмів ?', ''),
          b = prompt('На скільки його оціните ', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) { // цикл для визчанення кількості переглянутих фільмів
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Пееглянуто доволі мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класний глядач");
} else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
} else {
    console.log("Виникла помилка");
}

console.log(personalMovieDB);