-- migrate:up
CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(200) NOT NULL,
    title_eng VARCHAR(200) NOT NULL,
    duration_min INT NOT NULL,
    age_limit INT NOT NULL,
    opening_date DATE NOT NULL, 
    descriptions TEXT NOT NULL,
    thumbnail_image_url TEXT NOT NULL,
    director VARCHAR(100) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    actors VARCHAR(1000) NOT NULL,
    trailer_videos_url JSON NOT NULL,
    still_cut_image TEXT NOT NULL,
    PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE movies;
