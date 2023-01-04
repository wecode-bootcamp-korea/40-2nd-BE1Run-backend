-- migrate:up
CREATE TABLE seat (
    id INT NOT NULL AUTO_INCREMENT, 
    row_id INT,
    number_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (row_id) REFERENCES seat_row(id),
    FOREIGN KEY (number_id) REFERENCES seat_number(id)
)

-- migrate:down
DROP TABLE seat;
