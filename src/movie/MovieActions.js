export const getAllGenreMovie = () => dispatch => {
    try{
        const res = await moviedb.genreMovieList()
        
    } catch (e) {
        console.log(e)
    }
};