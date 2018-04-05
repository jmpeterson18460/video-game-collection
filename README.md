# video-game-collection
Created video_games database

Created systems table:
CREATE TABLE systems (
	id SERIAL PRIMARY KEY,
	name varchar(80)
);

Created video_games table:
CREATE TABLE video_games (
	id SERIAL PRIMARY KEY,
	name varchar(80),
	release_date DATE,
	rating varchar(5),
	pic varchar(500),
	system_id integer REFERENCES systems
);