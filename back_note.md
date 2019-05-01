#####建库
1. create database likeu;

#####建表
****城市表
create table citys(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(10) NOT NULL,
	imgUrl VARCHAR(100) NOT NULL,
	isForeign INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

****景点表
create table scenes(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	city_id INT UNSIGNED NOT NULL,
	title VARCHAR(50) NOT NULL,
	context TEXT NOT NULL,
	imgUrl_l VARCHAR(100) NOT NULL,
	imgUrl_rt VARCHAR(100) NOT NULL,
	imgUrl_rb VARCHAR(100) NOT NULL,
	tele VARCHAR(20) NOT NULL,
	cost_time VARCHAR(10) NOT NULL,
	traffic TINYTEXT NOT NULL,
	ticket VARCHAR(10) NOT NULL,
	open_time VARCHAR(20) NOT NULL,
	FOREIGN KEY(city_id) REFERENCES citys(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

****住宿表
create table hotels(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	scenes_id INT UNSIGNED NOT NULL,
	title VARCHAR(50) NOT NULL,
	description TINYTEXT NOT NULL,
	roomType VARCHAR(30) NOT NULL,
	tele VARCHAR(50) NOT NULL,
	check_time VARCHAR(20) NOT NULL,
	CONSTRAINT fk_hotel FOREIGN KEY (scenes_id) REFERENCES scenes (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

****游记表
create table travelStory(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	scenes_id INT UNSIGNED NOT NULL,
	title VARCHAR(50) NOT NULL,
	context TEXT NOT NULL,
	imgUrl VARCHAR(100) NOT NULL,
	time DATETIME NOT NULL,
	start_time DATETIME NOT NULL,
	days INT NOT NULL,
	company VARCHAR(10) NOT NULL,
	cost INT NOT NULL,
	watched INT NOT NULL,
	liked INT NOT NULL,
	CONSTRAINT fk_travel FOREIGN KEY (scenes_id) REFERENCES scenes (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

