CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#Exercício 1
# a: VARCHAR representa o número de cacteres que pode ser recebido.
# e o  DATE representa data. 

SHOW databases;
SHOW TABLES;

# b: Me fornece informações sobre a database. Como nome dela por exemplo.
# Me fornece o nome das tabelas existente dentro da base de dados.

DESCRIBE Actor;
# c: Me fornece a descrição que existe dentro da tabela, dos dados que ela recebe. 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1969-08-23", 
  "female"
);

# b: Key primária duplicada, esse é o erro. 

# c: 
# birth_date e gender não pode ser NULL e também não foi passado no parametro da função.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

#d: 
#O campo name não tem um valor padrão.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "fulano ator",
  400000,
  "1949-04-18", 
  "male"
);

# e: 
#Valor de data incorreto para o valor birth_date... Faltou aspas ""

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

# f:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Ana Maria Braga",
  300000,
  "1929-10-19", 
  "female"
);
SELECT * FROM Actor;

SELECT id, name from Actor WHERE gender = "female";
SELECT id, name, salary from Actor WHERE name = "Tony Ramos";
SELECT id, name from Actor WHERE gender = "invalid";
#Não existe nenhum ator com gender inválido.

SELECT id, name, salary from Actor WHERE salary <= 500000;

SELECT id, name from Actor WHERE id = "002";
#Porque nome não existe, na verdade o certo é NAME.

# Exercício 4

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
#Ele procura ator que tenha A no começo do nome ou J no começo do nome
# e que tenha salário maior que 300 mil. 

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR "%G%") AND salary BETWEEN 350000 AND 900000;

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
),
(
"004",
"Cidade de Deus",
"O jovem Buscapé, vivendo na cidade de Deus, acaba se distanciando do crime por causa de seu talento como fotógrafo, seguindo caminho por sua profissão e analisando o dia-a-dia da favela.",
"2002-08-30",
5
);


SELECT id, titulo, avaliacao from Films WHERE id = "002";

SELECT id, titulo, avaliacao, sinopse from Films WHERE titulo = "Cidade de Deus";

SELECT id, titulo, sinopse, avaliacao from Films WHERE avaliacao  >= 7;

SELECT * FROM Films
WHERE (titulo LIKE "%vida%"); #Não existe filme com a palavra VIDA[

SELECT * FROM Films
WHERE data_de_lancamento < "2022-06-06" AND (titulo LIKE "%Deus%" OR sinopse LIKE "%Flor%") AND avaliacao > 7;

SELECT * FROM Films;