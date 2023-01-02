const { dataSource } = require("./dataSource");

const getMovieDetail = async (movieId) => {
  try {
    const movie = await dataSource.manager.query(
      `
        SELECT
            title,
            title_eng,
            duration_min,
            age_limit,
            opening_date,
            descriptions,
            director,
            actors,
            thumbnail_image_url,
            still_cut_image
        FROM movies
        WHERE id = ${movieId}
      `
    );
    return movie[0];
  } catch {
    throw new Error("movieDaoError");
  }
};

const getTrailer = async (movieId) => {
  try {
    const trailer = await dataSource.manager.query(
      `
        SELECT  
            trailer_videos_url
        FROM movies
        WHERE id = ${movieId}
      `
    );
    return trailer[0];
  } catch {
    throw new Error("movieDaoError");
  }
};

const getMovieList = async (offsetNumber, limitNumber) => {
  try {
    const movies = await dataSource.manager.query(
      `
        SELECT 
            id,
            title,
            age_limit, 
            opening_date, 
            thumbnail_image_url,
            duration_min
        FROM movies 
        ORDER BY opening_date, id DESC
        LIMIT ${limitNumber} OFFSET ${offsetNumber} 
      `
    );
    return movies;
  } catch {
    throw new Error("movieDaoError");
  }
};

module.exports = { getMovieDetail, getMovieList, getTrailer };
