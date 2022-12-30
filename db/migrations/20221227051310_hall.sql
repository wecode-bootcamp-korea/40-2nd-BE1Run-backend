-- migrate:up
CREATE TABLE hall (
    id INT NOT NULL AUTO_INCREMENT, 
    hall_name VARCHAR(300),
    PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE hall;
