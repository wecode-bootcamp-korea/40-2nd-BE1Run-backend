-- migrate:up
CREATE TABLE reservation (
    id INT NOT NULL AUTO_INCREMENT, 
    user_id INT NOT NULL,
    movie_date_id INT NOT NULL,
    activeMovies_hall_theater_time_seat_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT UC_reservation UNIQUE (user_id, movie_date_id, activeMovies_hall_theater_time_seat_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (activeMovies_hall_theater_time_seat_id) REFERENCES activeMovies_hall_theater_time_seat(id)
)

-- migrate:down
DROP TABLE reservation;