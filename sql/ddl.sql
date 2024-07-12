DROP DATABASE IF EXISTS zenmirai_db;
CREATE DATABASE zenmirai_db;

\c zenmirai_db;

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    username VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP
);