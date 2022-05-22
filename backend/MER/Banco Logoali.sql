create database db_Logoali;

use db_Logoali;

create table tb_category(
	id int not null auto_increment,
    nm_category varchar(50),
    primary key(id)
);

create table tb_user(
	id int not null auto_increment,
    nm_user varchar(45),
    ds_email varchar(255),
    ds_password varchar(50),
    nm_photo varchar(45),
    ds_photo varchar(50),
    primary key(id)
);

create table tb_category_user(
	id_category int,
    id_user int,
    foreign key(id_user) references tb_user(id),
    foreign key(id_category) references tb_category(id)
);

create table tb_customer(
	id int not null auto_increment,
    nm_customer varchar(255),
    ds_email varchar(255),
    nr_telefone varchar(15),
    ds_lat int,
    ds_long int,
    nm_city varchar(100),
    uf_state char(2),
    ds_servico varchar(255),
    cd_status boolean,
    nm_photo varchar(45),
    ds_photo varchar(50),
    id_user int,
    primary key(id),
    foreign key(id_user) references tb_user(id)
);

create table tb_customer_layout(
	id int not null auto_increment,
    cd_background varchar(7),
    cd_fontColor varchar(7),
    cd_backgroundSecondary varchar(7),
    id_customer int,
    primary key(id),
    foreign key(id_customer) references tb_customer(id)
);

create table tb_photo(
	id int not null auto_increment,
    nm_photo varchar(255),
    ds_url varchar(255),
    id_customer int,
    primary key(id),
    foreign key(id_customer) references tb_customer(id)
);

create table tb_sale(
	id int not null auto_increment,
    dt_sale datetime,
    vl_sale decimal(10,2),
    nm_plano varchar(25),
    cd_status varchar(10),
    id_user int,
    primary key(id),
    foreign key(id_user) references tb_user(id)
);

create table tb_feedback(
	id int not null auto_increment,
    nr_feedback int,
    ds_feedback varchar(45),
    id_user int,
    primary key(id),
    foreign key(id_user) references tb_user(id)
);

create table tb_feedback_customer(
	id_feedback int,
    id_user int,
    id_customer int,
    foreign key(id_feedback) references tb_feedback(id),
    foreign key(id_user) references tb_user(id),
    foreign key(id_customer) references tb_customer(id)
);

-- -- -- --- -- - - -- INSERÇÕES TESTE -- -- --- -- -- - - - 

insert into tb_user values
(null, "Pedro", "pedro@gmail.com", "1234", "img/pedro.png"),
(null, "Andrey", "andrey@gmail.com", "1234", "img/andrey.png"),
(null, "Paulo", "paulo@gmail.com", "2345", "img/paulo.jpg");

insert into tb_category values
(null, "cliente"),
(null, "vendedor");

insert into tb_category_user values
(1, 1),
(1, 2),
(2, 2),
(1, 3),
(2, 3);

insert into tb_customer values
(null, "Paulo Empreendimentos", "pauloempreendimentos@gmail.com", "13988121415", "1111111", "-11111111", "Peruibe", "SP","Vendemos e alugamos materiais de pesca e aquarios", "1", 3),
(null, "Andrey Shopping", "andreyshopping@gmail.com", "139760002", "22222222", "-2222222", "Santos", "SP","Shopping de moda e estilos variados...", "1", 2); 

insert into tb_sale values
(null, "2022-02-16 11:51:00", "29.99", "Mensal", "1", 1);

insert into tb_photo values
(null, "foto1.png", "www.apilogoali.com/img/foto1.png", 1),
(null, "foto2.png", "www.apilogoali.com/img/foto2.png", 1),
(null, "foto3.png", "www.apilogoali.com/img/foto3.png", 1),
(null, "foto4.png", "www.apilogoali.com/img/foto4.png", 2),
(null, "foto5.png", "www.apilogoali.com/img/foto5.png", 2);

-- -- -- -- -- -- -- -- -- VIEWS -- -- -- -- -- -- -- -- --

create view listCustomer as(
select id_user, nm_user, ds_email, ds_foto from tb_user
where 
id_user in
(select id_user from tb_category_user
where
id_category = 2));

create view listUser as(
select id_user, nm_user, ds_email, ds_foto from tb_user
where 
id_user in
(select id_user from tb_category_user
where
id_category = 1));

create view findPhotos as(
select * from tb_photo
where
id_customer in
(select id_customer from tb_customer));

