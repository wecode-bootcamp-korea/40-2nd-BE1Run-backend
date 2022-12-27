-- migrate:up
CREATE TABLE seat_number (
    id INT NOT NULL AUTO_INCREMENT, 
    seat_number INT,
    PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE seat_number;
