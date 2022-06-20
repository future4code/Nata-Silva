```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW TABLES;
SELECT * FROM Actor;

SET SQL_SAFE_UPDATES = 0;

# Exercicio 1
-- A: Vai excluir a coluna de salario
-- B: Vai alterar a tabela de atores na coluna generos, e colocar o sexo
-- C: Vai alterar a tabela de atores na coluna generos, e definir o genero 
-- D: 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercicio 2

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 700000,
gender = "male"
WHERE id = "005";

# Exercicio 3

-- A:
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- B:

--  DELETE FROM Actor WHERE salary > 1000000;
--  SELECT * FROM Actor;

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;


# Exercicio 4

SELECT COUNT(*) FROM Actor  WHERE gender = "female";

-- A:
SELECT MAX(salary) FROM Actor;

-- B:
SELECT MIN(salary) FROM Actor;

-- C:
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- D:
SELECT SUM(salary) FROM Actor;


# Exercicio 5
 -- A:
-- Ela faz multiplica todos os atores por genero
 
 -- B: 
SELECT id, name FROM Actor
ORDER BY name DESC;

-- C:
SELECT * FROM Actor
order by salary;

-- D:
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- E:
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

# Exercicio 6

CREATE TABLE Films (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao INT
);
INSERT INTO Films (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "001", 
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
),
(
"002",
"Doce de mãe",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2012-12-27",
10
),
(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);


SELECT * FROM Films;

-- A:
ALTER TABLE Films
ADD playing_limit_date VARCHAR(255);

-- B:
ALTER TABLE Films CHANGE avaliacao avaliacao FLOAT;

-- C:
UPDATE Films
SET
playing_limit_date = "2020-12-31"
WHERE id = 002;

-- D:
DELETE FROM Films WHERE id = "004"
```