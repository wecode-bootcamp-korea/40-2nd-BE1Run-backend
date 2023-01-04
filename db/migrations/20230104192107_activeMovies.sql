-- migrate:up
CREATE TABLE activeMovies (
    id INT NOT NULL AUTO_INCREMENT, 
    movie_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
)

-- migrate:down
DROP TABLE activeMovies;
