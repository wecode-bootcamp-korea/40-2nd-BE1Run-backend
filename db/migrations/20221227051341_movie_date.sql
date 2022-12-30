-- migrate:up
CREATE TABLE movie_date (
    id INT NOT NULL AUTO_INCREMENT, 
    date DATE,
    PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE movie_date;
