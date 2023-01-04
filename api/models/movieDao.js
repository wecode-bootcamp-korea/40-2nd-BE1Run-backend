const {dataSource } = require('./dataSource')

const movieSearch = async (keyword) => {
        const result = await dataSource.query(`
            SELECT
                m.id,
                m.title,
                m.title_eng as titleEng,
                m.duration_min as durationMin,
                m.age_limit as ageLimit,
                m.opening_date as openingDate,
                m.descriptions,
                m.thumbnail_image_url as thumbnailImageUrl,
                m.director,
                m.price,
                m.actors,
                m.trailer_videos_url as trailerVideoUrl,
                m.still_cut_image as stillCutImage
            FROM movies m
            WHERE title LIKE '%${keyword}%'
            OR title_eng LIKE '%${keyword}%'
            `,
        )
        return result  
}

module.exports ={
    movieSearch
}