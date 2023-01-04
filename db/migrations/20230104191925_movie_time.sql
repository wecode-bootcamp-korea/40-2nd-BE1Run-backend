-- migrate:up
CREATE TABLE movie_time (
    id INT NOT NULL AUTO_INCREMENT, 
    movie_time time,
    PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE movie_time;
