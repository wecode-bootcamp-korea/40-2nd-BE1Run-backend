-- migrate:up
CREATE TABLE seat_row (
    id INT NOT NULL AUTO_INCREMENT, 
    row_name VARCHAR(4),
    PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE seat_row;
