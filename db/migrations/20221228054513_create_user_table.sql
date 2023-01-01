-- migrate:up
create table users(
    id INT NOT NULL auto_increment PRIMARY KEY,
    nick_name VARCHAR(100) NULL,
    email VARCHAR(100) NULL,
    kakao_id VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    undated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT users_social_id_ukey UNIQUE(kakao_id)
)
-- migrate:down
DROP TABLE users


