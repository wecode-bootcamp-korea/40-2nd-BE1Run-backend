-- migrate:up
CREATE TABLE activeMovies_hall (
    id INT NOT NULL AUTO_INCREMENT, 
    activeMovie_id INT NOT NULL,
    hall_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (hall_id) REFERENCES hall(id),
    FOREIGN KEY (activeMovie_id) REFERENCES activeMovies(id)
)

-- migrate:down
DROP TABLE activeMovies_hall;
