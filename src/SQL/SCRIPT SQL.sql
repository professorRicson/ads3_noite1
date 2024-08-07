
CREATE TABLE Contatos (
	id int PRIMARY KEY AUTO_INCREMENT,
  	name VARCHAR(100) not null,
  	email VARCHAR(255) not null,
  	phone VARCHAR(11) not null,
  	city varchar(40) not null,
  	message text not null,
    	idade int not null,
    	sexualidade varchar (25) not null,
    	identidadeGenero varchar (40) not null,
    	etnia varchar (30) not null,
    	religiao varchar (40) not null,
    	comQuemMora varchar (100) not null,
    	escolaridade varchar (30) not null,
    	trabalho varchar (30),
    	conheceAmas varchar (5) not null,
    	conheceuSIM varchar (20),
    	conheceuNAO varchar (20),
    	discriminado varchar (5) not null,
  
);
