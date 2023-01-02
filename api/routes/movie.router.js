const express = require("express");

const movieController = require("../controllers/movie.controller");
const moviesRouter = express.Router();

moviesRouter.get("/:movieId", movieController.getMovieDetail);
moviesRouter.get("/trailer/:movieId", movieController.getTrailer);
moviesRouter.get("/", movieController.getMovieList);

module.exports = { moviesRouter };
