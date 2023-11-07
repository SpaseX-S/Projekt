const numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?','');
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
const a = prompt('Один из последних просимотрених фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просимотрених фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies [a] = b;
      personalMovieDB.movies [c] = d;
      
      console.log(personalMovieDB);