-- migrate:up
CREATE TABLE activeMovies_hall_theater_time (
    id INT NOT NULL AUTO_INCREMENT, 
    activeMovies_hall_id INT NOT NULL,
    theater_id INT NOT NULL,
    movie_time_id INT NOT NULL, 
    PRIMARY KEY (id),
    FOREIGN KEY (activeMovies_hall_id) REFERENCES activeMovies_hall(id),
    FOREIGN KEY (theater_id) REFERENCES theater(id),
    FOREIGN KEY (movie_time_id) REFERENCES movie_time(id)
)

-- migrate:down
DROP TABLE activeMovies_hall_theater_time;
