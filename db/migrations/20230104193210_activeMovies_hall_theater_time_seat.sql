-- migrate:up
CREATE TABLE activeMovies_hall_theater_time_seat (
    id INT NOT NULL AUTO_INCREMENT, 
    activeMovies_hall_theater_time_id INT NOT NULL,
    seat_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (activeMovies_hall_theater_time_id) REFERENCES activeMovies_hall_theater_time(id),
    FOREIGN KEY (seat_id) REFERENCES seat(id)
)

-- migrate:down
DROP TABLE activeMovies_hall_theater_time_seat;
