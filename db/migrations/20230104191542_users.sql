-- migrate:up
create table users(
    id INT NOT NULL AUTO_INCREMENT,
    nick_name VARCHAR(100) NULL,
    email VARCHAR(100) NULL,
    kakao_id BIGINT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT users_kakao_id_ukey UNIQUE(kakao_id),
    PRIMARY KEY(id)
)

-- migrate:down
DROP TABLE users