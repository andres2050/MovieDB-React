import { MovieDb } from 'moviedb-promise';

const apiKey = '4e5a066d538700839ce64a6ce9a64d53';
const moviedb = new MovieDb(apiKey);

export function getMovieGenres() {
    return moviedb.genreMovieList();
};

export function getMovie(movieID) {
    return moviedb.movieInfo({ id: movieID });
};

export function searchMovie(title) {
    return moviedb.searchMovie({ query: title });
};

export function getMoviesOfGenre(genreID) {
    return moviedb.discoverMovie({ with_genres: genreID })
};