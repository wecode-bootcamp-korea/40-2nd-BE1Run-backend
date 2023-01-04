const movieService = require('../services/movieService')
const { catchAsync } = require('../utils/error')

const movieSearch =  catchAsync(async (req, res) =>{
    const keyword = req.query.keyword

    const result = await movieService.movieSearch(keyword)
    res.status(200).json({ data: result })
})

module.exports = {
    movieSearch
}
