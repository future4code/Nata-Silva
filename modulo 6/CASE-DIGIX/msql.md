//tabela lista das familias

CREATE TABLE Lista_de_familias(
id  VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
idade VARCHAR(255) NOT NULL,
cpf VARCHAR(255) NOT NULL UNIQUE,
renda_total VARCHAR(255)
);

//tabela Pontuação

CREATE TABLE Pontuacao(
    pontos VARCHAR(255),
    id_familia VARCHAR(255),
    FOREIGN KEY(id_familia) REFERENCES Lista_de_familias(id)
);

//Tabela membros das familias

CREATE TABLE Membros_da_familia(
    nome VARCHAR(255),
    idade VARCHAR(255),
    parentesco VARCHAR(255),
    id_familia VARCHAR(255) NOT NULL,
    FOREIGN KEY(id_familia) REFERENCES Lista_de_familias(id)
);


#tabela dados finais

SELECT Lista_de_familias.nome, Lista_de_familias.id, Lista_de_familias.renda_total, Pontuacao.pontos, Lista_de_familias.cpf
FROM Lista_de_familias
INNER JOIN  Pontuacao
ON Lista_de_familias.id = Pontuacao. id_familia;
