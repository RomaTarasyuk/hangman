var personalMovieDB = { // Об'єкт
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () { // ф-ція, яка запитує у користувача про фільми
        personalMovieDB.count = +prompt("Скільки фільмів Ви вже переглянули ?", "");
            while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt("Скільки фільмів Ви вже переглянули ?", "");
        }
    },
    rememberMyFilms: function () { // ф-ція для запамятовування фільмів
        for (var i = 0; i < 2; i++) { 
            var a = prompt("Один з останніх переглянутих фільмів ?", ""),
                b = prompt("На скільки його оціните ?", "");
               
                if (a != null && b != null && a != "" && b != ""  && a.length < 50) { // якщо а не нул і б не нул і а не пуста і б не пусто і довжина а не більша 50
                    personalMovieDB.movies[a] = b; // то записуємо получені дані в об'єкт
                    console.log("done");
                } else {
                    console.log("error");
                    i--; // а якщо не вірно, то запитємо знову
                }
        }
    },
    detectedPersonalLevel: function () { // ф-ція яка фіксує рівень глядача
        if (personalMovieDB.count < 10){
            console.log("Переглянуто доволі мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Ви класний глядач");
        } else if (personalMovieDB.count >= 30){
            console.log("Ви кіноман");
        } else {
            console.log("Сталася помилка");
        }
        console.log(personalMovieDB);
    },
    showMyDB: function (hidden) { // Функція для контролю приватності бази даних
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){ // ф-ція, що переключає приватність бази даних
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() { // Функція для запиту про улюбені жанри
        for (var i = 1; i <= 3; i++) {
            var genre = prompt(`Ваш улюблений жанр під номером ${1}`);

            if (genre === '' || genre == null) {
                console.log('Ви ввели некоректні дані, або не ввели нічого.');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => { // ф-ція яка перебирає масив і видає рейтинг улюблених жанрів
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });
    }
};

