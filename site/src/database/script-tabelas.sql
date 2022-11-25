-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database hogwarts;
use hogwarts;


create table casa(
id int primary key auto_increment,
nome_casa varchar(50)
);



create table usuario(
id int primary key auto_increment,
nome varchar(50),
sobrenome varchar(50),
email varchar(50),
senha varchar(50),
ponto int,
fk_casa int,
foreign key (fk_casa) references casa(id)
);

create table frase(
id int primary key auto_increment,
fk_user int,
foreign key (fk_user) references usuario(id),
frase_user varchar(50)
);

insert into casa(nome_casa)values
('Descobrir'),
('Grifinória'),
('Sonserina'),
('Corvinal'),
('Lufa-lufa');

select * from usuario;
select * from frase;
insert into usuario (fk_casa)values
(3),
(3),
(3),
(2),
(2),
(2),
(4),
(5);

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
