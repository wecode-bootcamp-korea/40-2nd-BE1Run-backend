-- migrate:up
CREATE TABLE reservation (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    screen_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT screen_uc UNIQUE (screen_id),
    CONSTRAINT reservations_user_id_fkey FOREIGN KEY(user_id) REFERENCES users(id),
    CONSTRAINT reservations_screen_id_fkey FOREIGN KEY(screen_id) REFERENCES screen(id)
)

-- migrate:down
DROP TABLE reservation
