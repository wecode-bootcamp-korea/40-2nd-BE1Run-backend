-- migrate:up
CREATE TABLE theater (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(300),
    PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE theater;
