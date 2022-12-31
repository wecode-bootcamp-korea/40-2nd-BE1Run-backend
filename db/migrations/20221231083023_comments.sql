-- migrate:up
CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT, 
    user_id INT NOT NULL,
    movie_id INT NOT NULL,
    reservation_id INT NOT NULL, 
    comment VARCHAR(3000) NOT NULL, 
    rating INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (reservation_id) REFERENCES reservation(id)
)

-- migrate:down

