module.exports = {
  //*Global
  keyErr: {
    statusCode: 400,
    message: "KEY_ERROR",
  },

  //*USERS
  createUserErr: {
    statusCode: 400,
    message: "CANNOT_CREATE_USER",
  },

  tokenErr: {
    statusCode: 400,
    message: "NEED_ACCESS_TOKEN",
  },

  //*Movies
  searchMovieErr: {
    statusCode: 404,
    message: "CANNOT_SEARCH",
  },

  // MOVIES
  dataNotFound: {
    statusCode: 404,
    message: "REQUESTED_DATA_IS_NOT_FOUND",
  },

  movieDaoError: {
    statusCode: 400,
    message: "UNDEFINED_ERROR_FROM_MOVIE_DAO",
  },

  inputError: {
    statusCode: 400,
    message: "INPUT_FOR_THE_PATH_PARAMETER_SHOULD_BE_A_NUMBER",
  },
};
