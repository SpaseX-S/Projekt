'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?','');
    while(numberOfFilms=='' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?','');
    }
}

start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

function rememberMyFilms(){
    for( let i=0; i<2; i++){
        const a = prompt('Один из последних просимотрених фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
            
            if (a != null && b != null && a != "" && b !="" && a.length <50 ) {
                personalMovieDB.movies[a]=b;
                console.log (personalMovieDB.movies);
            } else {
                console.log("error");
                i--;
            }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count <10) {
        console.log ("мало посмотрели");
    } else if (personalMovieDB.count >10 && personalMovieDB.count>30){
        console.log ("класический зритель");
    } else if (personalMovieDB.count >+30) {
        console.log("ви киноман");
    } else {
        console.timeLog ("error")
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i=1; i<=3; i++ ){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1]= genre;
    }
}
    
writeYourGenres();