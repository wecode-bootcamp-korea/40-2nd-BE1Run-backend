const movieDao = require("../models/movie.dao");

const getMovieDetail = async (movieId) => {
  const movie = await movieDao.getMovieDetail(movieId);
  if (movie === undefined) {
    throw new Error("dataNotFound");
  }
  return movie;
};

const getTrailer = async (movieId) => {
  const trailer = await movieDao.getTrailer(movieId);
  if (trailer === undefined) {
    throw new Error("dataNotFound");
  }
  return trailer;
};

const getMovieList = async (offsetNumber, limitNumber) => {
  const movieList = await movieDao.getMovieList(offsetNumber, limitNumber);
  return movieList;
};

module.exports = { getMovieDetail, getMovieList, getTrailer };
