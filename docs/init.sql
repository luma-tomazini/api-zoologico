CREATE TABLE reptil (id SERIAL NOT NULL PRIMARY KEY,
					 nome VARCHAR(50) NOT NULL, 
					 idade INT, 
					 genero VARCHAR(3) NOT NULL, 
					 tipos_de_escamas VARCHAR(10));
					 
CREATE TABLE ave (id SERIAL NOT NULL PRIMARY KEY,
					 nome VARCHAR(50) NOT NULL, 
					 idade INT, 
					 genero VARCHAR(3) NOT NULL, 
					 envergadura FLOAT);
					 
CREATE TABLE mamifero (id SERIAL NOT NULL PRIMARY KEY,
					 nome VARCHAR(50) NOT NULL, 
					 idade INT, 
					 genero VARCHAR(12) NOT NULL, 
					 raca VARCHAR(30));
					 
INSERT INTO mamifero (nome, idade, genero, raca)
	VALUEs
('Simba', 2, 'Macho', 'Leão'), 
('Nala', 2, 'Femea', 'Leoa'),
('Pumba', 10, 'Macho', 'Javali'),
('Timao', 1, 'Macho', 'Suricato');

INSERT INTO ave (nome, idade, genero, envergadura)
	VALUES
('Zuzu', 3, 'Femea', 20),
('Iago', 5, 'Macho', 30),
('Scuttle', 2, 'Macho', 40);

INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
	VALUES
('Pascal', 4, 'macho', 'Dermicas'),
('Crush', 50, 'Macho', 'Escudos'),
('Kaa', 8, 'Femea', 'Escamas quiliferas');

--ALTER TABLE reptil
--ALTER COLUMN tipo_de_escamas TYPE VARCHAR(50);

--SELECT * FROM mamifero;
--SELECT * FROM ave;
--SELECT * FROM reptil;

