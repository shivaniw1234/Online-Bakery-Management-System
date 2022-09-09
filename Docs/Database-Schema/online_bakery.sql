
CREATE TABLE `user_info_tbl`(
    `user_id` INT primary key AUTO_INCREMENT,
    `user_firstname` VARCHAR(255) NULL,
    `user_lastname` VARCHAR(255) NULL,
    `user_email_id` VARCHAR(255) NULL,
    `user_password` VARCHAR(255) NULL,
    `user_phone_no` INT NULL,
    `user_role` VARCHAR(255) NULL
);


CREATE TABLE `address_tbl`(
    `user_id` INT,
    `address_line_1` VARCHAR(255) NULL,
    `address_line_2` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `pincode` INT NULL,
    `address_type` VARCHAR(255) NULL,
	foreign key (`user_id`) references `user_info_tbl`(`user_id`)
);



CREATE TABLE `order_tbl`(
    `order_id` INT primary key AUTO_INCREMENT,
    `user_id` INT ,
    `order_date` DATETIME NULL,
    `order_price` DECIMAL(8, 2) NULL,
    `discount` INT NULL,
    `payment_mode` VARCHAR(255) NULL,
    `payment_status` VARCHAR(255) NULL,
	foreign key(`user_id`) references `user_info_tbl`(`user_id`)
);


CREATE TABLE `product_tbl`(
    `product_id` INT primary key AUTO_INCREMENT,
    `product_name` VARCHAR(255) NOT NULL,
    `category_name` VARCHAR(255) NOT NULL,
    `product_selling_price` DECIMAL(8, 2) NOT NULL,
    `stock` INT NOT NULL,
	`product_img` blob
);


CREATE TABLE `customer_review_tbl`(
    `review_id` INT primary key AUTO_INCREMENT,
    `review` VARCHAR(255) NOT NULL,
	 rating int not null, 
    `product_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `date` DATE NOT NULL,
	foreign key(`product_id`) references `product_tbl`(`product_id`)
);
 alter table customer_review_tbl add foreign key(`user_id`) references `user_info_tbl`(`user_id`);
 

CREATE TABLE `cart_details_tbl`(
    `cart_id` INT primary key AUTO_INCREMENT,
    `user_id` INT NOT NULL,
	foreign key(`user_id`) references `user_info_tbl`(`user_id`)
);


CREATE TABLE `cart_product_details`(
    `product_id` INT,
    `cart_id` INT ,
	foreign key(`product_id`) references `product_tbl`(`product_id`)
);
 alter table `cart_product_details` add foreign key(`cart_id`) references `cart_details_tbl`(`cart_id`);
 
 alter table `cart_product_details` add primary key(`cart_id`,`product_id`);
 

CREATE TABLE `product_order_tbl`(
    `product_id` int,
    `order_id` INT ,
    `quantity` INT NOT NULL,
    `amount` INT NOT NULL,
	foreign key(`product_id`) references `product_tbl`(`product_id`)
);
 alter table `product_order_tbl` add foreign key(`order_id`) references `order_tbl`(`order_id`);
 
alter table `product_order_tbl` add primary key(`order_id`,`product_id`);