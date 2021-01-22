import {
    getMovieGenres,
    getMovie,
    searchMovie,
    getMoviesOfGenre
} from './Movie'
import genres from './example/genres.json'
import movie from './example/movie.json'
import sMovie from './example/search_movie.json'
import aMovie from './example/action_movies.json'

test('Test results of getMovieGenres', async () => {
    const res = await getMovieGenres();
    expect(JSON.stringify(res)).toBe(JSON.stringify(genres));
});

test('Test results of getMovie', async () => {
    // Find Avengers: End Game
    const res = await getMovie(299534);
    expect(JSON.stringify(res)).toBe(JSON.stringify(movie));
});

test('Test results of searchMovie', async () => {
    const res = await searchMovie("el padrino");
    expect(JSON.stringify(res)).toBe(JSON.stringify(sMovie));
});

test('Test results of getMoviesOfGenre', async () => {
    // Get Action Movies
    const res = await searchMovie(28);
    expect(JSON.stringify(res)).toBe(JSON.stringify(aMovie));
});
