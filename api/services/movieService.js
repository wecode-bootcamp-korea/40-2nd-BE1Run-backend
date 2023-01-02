const movieDao = require('../models/movieDao')

const movieSearch = async (keyword) =>{
    const result = await movieDao.movieSearch(keyword)
    if (result.length === 0) {
        throw new Error('searchMovieErr')
    } else {
        return result
    }
 
}

module.exports = {
    movieSearch
}