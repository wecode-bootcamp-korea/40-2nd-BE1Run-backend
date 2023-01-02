const movieService = require("../services/movie.service");
const { catchAsync } = require("../utils/error");

const getMovieDetail = catchAsync(async (req, res) => {
  const movieId = req.params.movieId;
  if (isNaN(movieId)) {
    throw new Error("inputError");
  }
  const movie = await movieService.getMovieDetail(movieId);
  res.status(200).json(movie);
});

const getTrailer = catchAsync(async (req, res) => {
  const movieId = req.params.movieId;
  if (isNaN(movieId)) {
    throw new Error("inputError");
  }
  const trailer = await movieService.getTrailer(movieId);
  res.status(200).json(trailer);
});

const getMovieList = catchAsync(async (req, res) => {
  let offsetNumber = req.body.offsetNumber;
  let limitNumber = req.body.limitNumber;
  if (offsetNumber === undefined || limitNumber === undefined) {
    offsetNumber = 0;
    limitNumber = 8;
  }
  const movies = await movieService.getMovieList(offsetNumber, limitNumber);
  res.status(200).json(movies);
});

module.exports = { getMovieDetail, getMovieList, getTrailer };
