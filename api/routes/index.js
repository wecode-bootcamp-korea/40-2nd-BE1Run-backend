const express = require("express");
const { moviesRouter } = require("./movie.router");
const userRouter = require("./userRouter");

const router = express.Router();
const movieRouter = require("./movieRoute");

router.use("/auth", userRouter.router);
router.use("/movies", moviesRouter);
router.use("/movie", movieRouter.router);

module.exports = router;
