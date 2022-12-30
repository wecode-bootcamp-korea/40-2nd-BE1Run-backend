-- migrate:up
CREATE TABLE screen (
    id INT NOT NULL AUTO_INCREMENT, 
    movie_id INT,
    theater_id INT,
    movie_date_id INT,
    movie_time_id INT, 
    hall_id INT,
    seat_id INT,
    PRIMARY KEY (id),
    CONSTRAINT UC_screen UNIQUE (movie_id, theater_id, movie_date_id, movie_time_id, hall_id, seat_id),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (theater_id) REFERENCES theater(id),
    FOREIGN KEY (movie_date_id) REFERENCES movie_date(id),
    FOREIGN KEY (movie_time_id) REFERENCES movie_time(id),
    FOREIGN KEY (hall_id) REFERENCES hall(id),
    CONSTRAINT screen_seat_id_fkey FOREIGN KEY (seat_id) REFERENCES seat(id)
)

-- migrate:down
DROP TABLE screen;
