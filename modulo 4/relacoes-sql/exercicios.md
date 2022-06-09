#Exercicio 1

SELECT * FROM Films;

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    Films_id VARCHAR(255),
    FOREIGN KEY (Films_id) REFERENCES Films(id)
);

-- A: Chave estrangeira é o FOREIGN KEY

-- B:
INSERT INTO Rating (id, comment, rate, Films_id) 
VALUES (
	"002",
    "Muito bom!",
    8,
	"001"
);

-- C:

-- Da um erro dizendo que tabela nao pode existir, pq nao foi achado o filme 

-- D:

alter TABLE Films DROP COLUMN avaliacao;


#Exercicio 2

SELECT * FROM MovieCast;

CREATE TABLE MovieCast (
	Films_id VARCHAR(255),
	Actor_id VARCHAR(255),
    FOREIGN KEY (Films_id) REFERENCES Films(id),
    FOREIGN KEY (Actor_id) REFERENCES Actor(id)
);

-- A:
-- Criou uma tabela de Elenco do Filme, nela conecta filmes a atores

-- B:

INSERT INTO MovieCast(Films_id, Actor_id)
Values(
	"003",
    "010"
);

-- C:
--  Da erro, pois o Ator nao existe 

-- D: 

DELETE FROM Actor where id= "001";

-- Ele não é deletado pois esta linkado a um filme



#Exercicio 3

SELECT * FROM Films 
INNER JOIN Rating ON Films.id = Rating.Films_id;

-- A:
-- conecta os elementos iguais de 2 colunas 

-- B:

SELECT m.id as Films_id, r.rate as rating FROM Films m
INNER JOIN Rating r ON m.id = r.Films_id;

