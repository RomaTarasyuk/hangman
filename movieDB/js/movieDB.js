var numberOfFilms; 

function start() { // ф-ція для запиту до користувача
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули', '');
    }
}

start();

var personalMovieDB = { //головний об'єкт
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() { // ф-ція для запам'ятовування вказаних фільмів
    for (var i = 0; i < 2; i++) {
        var a = prompt('Один з останніх переглянутих фільмів', ''),
              b = prompt('На скільки його оцінете', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() { // ф-ція для показу глядацького рівня
    if (personalMovieDB.count < 10) {
        console.log("Переглянути доволі мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ви класний глядач");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман");
    } else {
        console.log("Виникла помилка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) { // ф-ція для перегляду приватності бази даних
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() { // ф-ція для запиту до користувача про улюблений жанр
    for (var i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();