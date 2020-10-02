-- CREATE DATABASE jwttutorialdb;

-- necessary for using uuid
create extension if not exists "uuid-ossp";

CREATE TABLE users(
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE todos (
	todo_id SERIAL PRIMARY KEY,
	user_id UUID,
	description VARCHAR(255) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- inner join example using ids with pk and fk
select * from users 
    inner join todos 
        on 
    users.user_id = todos.user_id

-- left join example
select * from users 
    left join todos 
        on 
    users.user_id = todos.user_id;

-- right join
select * from users 
    right join todos 
        on 
    users.user_id = todos.user_id;