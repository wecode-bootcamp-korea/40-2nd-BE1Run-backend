-- migrate:up
CREATE TABLE reservation (
    id INT NOT NULL AUTO_INCREMENT, 
    user_id INT NOT NULL,
    movie_id INT NOT NULL,
    theater_id INT NOT NULL,
    movie_date_id INT NOT NULL,
    movie_time_id INT NOT NULL, 
    hall_id INT NOT NULL,
    seat_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT UC_reservation UNIQUE (user_id, movie_id, theater_id, movie_date_id, movie_time_id, hall_id, seat_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (theater_id) REFERENCES theater(id),
    FOREIGN KEY (movie_time_id) REFERENCES movie_time(id),
    FOREIGN KEY (hall_id) REFERENCES hall(id),
    FOREIGN KEY (seat_id) REFERENCES seat(id)
)

-- migrate:down
DROP TABLE reservation;