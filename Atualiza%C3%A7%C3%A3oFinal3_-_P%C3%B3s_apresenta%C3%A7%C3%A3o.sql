CREATE DATABASE IF NOT EXISTS trabalho_interdiciplinar;
USE trabalho_interdiciplinar;

CREATE TABLE Pessoas(
	cod_pessoa INT UNSIGNED NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	data_nascimento DATE NOT NULL,
	cpf CHAR(11),
	email VARCHAR(50) NOT NULL,
	CONSTRAINT Pessoas_PK PRIMARY KEY (cod_pessoa)
)ENGINE=INNODB;

CREATE TABLE Competicoes(
	cod_competicao INT UNSIGNED NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	distancia TINYINT UNSIGNED,
	data_horario DATETIME,
	local_competicao VARCHAR(70),
	limite_vagas TINYINT UNSIGNED,
	mapa VARCHAR(50),
	CONSTRAINT Competicoes_PK PRIMARY KEY (cod_competicao)
)ENGINE=INNODB;

CREATE TABLE Atletas(
	cod_atleta INT UNSIGNED NOT NULL AUTO_INCREMENT,
	modalidade VARCHAR(30) NOT NULL,
	CONSTRAINT Atletas_PK PRIMARY KEY (cod_atleta),
	CONSTRAINT Atletas_FK FOREIGN KEY (cod_atleta)
		REFERENCES Pessoas (cod_pessoa)
)ENGINE=INNODB;

CREATE TABLE Competidores(
	cod_atleta INT UNSIGNED NOT NULL,
	cod_competicao INT UNSIGNED NOT NULL,
	classificacao VARCHAR(20),
	CONSTRAINT Competidores_PK PRIMARY KEY (cod_atleta, cod_competicao),
	CONSTRAINT Competidores_FK1 FOREIGN KEY (cod_atleta)
		REFERENCES Atletas (cod_atleta),
	CONSTRAINT Competidores_FK2 FOREIGN KEY (cod_competicao)
		REFERENCES Competicoes (cod_competicao)
)ENGINE=INNODB;

CREATE TABLE CorridaTrilhas(
	cod_corridaTrilha INT UNSIGNED NOT NULL,
	checkpoints TINYINT UNSIGNED,
	dificuldade VARCHAR(20),
	CONSTRAINT CorridaTrilha_PK PRIMARY KEY (cod_corridaTrilha),
	CONSTRAINT CorridaTrilha_FK FOREIGN KEY (cod_corridaTrilha)
		REFERENCES Competicoes (cod_competicao)
)ENGINE=INNODB;

CREATE TABLE Maratonas(
	cod_maratona INT UNSIGNED NOT NULL,
	CONSTRAINT Maratona_PK PRIMARY KEY (cod_maratona),
	CONSTRAINT Maratona_FK FOREIGN KEY (cod_maratona)
		REFERENCES Competicoes (cod_competicao)
)ENGINE=INNODB;

INSERT INTO Pessoas (nome, data_nascimento, cpf, email)
VALUES ('Maria da Silva', '1990-05-15', '12345678901', 'maria.silva@email.com');


INSERT INTO Pessoas (nome, data_nascimento, cpf, email)
VALUES ('Maria das graças', '1991-06-11', '11122233344', 'mariadas.gracas@email.com'),
('Barbara Briel','1995-02-03', '11111111111', 'barbara.briel@gmail.com');


INSERT INTO Pessoas (nome, data_nascimento, cpf, email) VALUES
('Luan Mantovani', '1998-07-15', '22222222222', 'luan.mantovani@email.com'),
('Henrique Helker', '1989-08-19', '33333333333', 'henrique.helker@email.com'),
('Lucas Pereira', '1994-12-15', '44444444444', 'lucas.pereira@email.com'),
('Luana Clara', '1990-01-12', '55555555555', 'luana.clara@email.com'),
('Pedro Carlos', '2000-08-01', '77777777777', 'pedro.carlos@email.com'),
('Guilherme Neves', '2001-01-02', '88888888888', 'guilherme.neves@email.com');


INSERT INTO Pessoas (nome, data_nascimento, cpf, email) VALUES
('Ana Clara Costa', '1992-04-18', '11111111122', 'ana.clara@email.com'),
('Bruno Eduardo Santos', '1985-09-25', '22222222233', 'bruno.eduardo@email.com'),
('Carla Denise Oliveira', '1976-11-03', '33333333344', 'carla.denise@email.com'),
('Diego Fernandes Lima', '2000-01-14', '44444444455', 'diego.fernandes@email.com'),
('Eliane Gomes Pereira', '1995-07-29', '55555555566', 'eliane.gomes@email.com');


INSERT INTO Pessoas (nome, data_nascimento, cpf, email) VALUES
('Fábio Henrique Rocha', '1988-02-10', '77777777788', 'fabio.henrique@email.com'),
('Gabriela Irene Silva', '1981-12-05', '77777777799', 'gabriela.irene@email.com'),
('Heitor Jorge Souza', '1998-06-22', '88888888899', 'heitor.jorge@email.com'),
('Isabela Lúcia Alves', '1970-03-30', '99999999900', 'isabela.lucia@email.com'),
('Júlio Marcelo Reis', '1993-10-12', '00000000011', 'julio.marcelo@email.com');

INSERT INTO Pessoas (nome, data_nascimento, cpf, email) VALUES
('Kátia Nunes Barbosa', '1989-05-01', '10101010101', 'katia.nunes@email.com'),
('Lucas Otávio Mendes', '1973-08-07', '21212121212', 'lucas.otavio@email.com'),
('Mariana Patrícia Neves', '2002-01-20', '32323232323', 'mariana.patricia@email.com'),
('Nelson Quintino Sales', '1991-04-05', '43434343434', 'nelson.quintino@email.com'),
('Olívia Raquel Teixeira', '1984-11-16', '54545454545', 'olivia.raquel@email.com');

INSERT INTO Pessoas (nome, data_nascimento, cpf, email) VALUES
('Paulo Sérgio Vieira', '1979-06-28', '65656565656', 'paulo.sergio@email.com'),
('Quésia Tainá Xavier', '1996-02-09', '76767676767', 'quesia.taina@email.com'),
('Renato Ulysses Zambrano', '1987-09-02', '87878787878', 'renato.ulysses@email.com'),
('Sofia Vitória Amarante', '1975-12-19', '98989898989', 'sofia.vitoria@email.com'),
('Thiago William Barreto', '1994-03-11', '09090909090', 'thiago.william@email.com'),
('Úrsula Yolanda Castro', '1986-10-24', '19191919191', 'ursula.yolanda@email.com');

INSERT INTO Atletas (cod_atleta, modalidade) VALUES
(1, 'Trail Running'), (2, 'Maratona'), (3, 'Trail Running'), (4, 'Maratona'), (5, 'Trail Running'),
(6, 'Maratona'), (7, 'Maratona'), (8, 'Trail Running'), (9, 'Maratona'), (10, 'Trail Running'),
(11, 'Maratona'), (12, 'Trail Running'), (13, 'Maratona'), (14, 'Trail Running'), (15, 'Maratona'),
(16, 'Maratona'), (17, 'Trail Running'), (18, 'Trail Running'), (19, 'Trail Running'), (20, 'Maratona'),
(21, 'Trail Running'), (22, 'Maratona'), (23, 'Trail Running'), (24, 'Maratona'), (25, 'Trail Running'),
(26, 'Maratona'), (27, 'Trail Running'), (28, 'Maratona'), (29, 'Trail Running'), (30, 'Maratona');

INSERT INTO Competicoes (nome, distancia, data_horario, local_competicao, limite_vagas, mapa) VALUES
('Trilha da Pedra Furada 10K', 10, '2025-03-15 07:00:00', 'Parque Nacional de Itatiaia', 150, 'mapa_pfurada10k'),
('Ultra Trail Serra Verde 30K', 30, '2025-04-05 06:30:00', 'Chapada dos Guimarães', 100, 'mapa_serraverde30k'),
('Trilha Noturna do Sabiá 5K', 5, '2025-05-02 20:00:00', 'Reserva Ecológica do Tietê', 200, 'mapa_sabinoturna5k'),
('Desafio da Montanha 21K', 21, '2025-06-14 06:00:00', 'Serra do Mar', 80, 'mapa_montanha21k'),
('Trail Kids Aventura 3K', 3, '2025-07-27 09:00:00', 'Horto Florestal', 250, 'mapa_kids3k'),
('Trilha dos Sentinelas 15K', 15, '2025-08-10 07:30:00', 'Vale do Pati', 120, 'mapa_sentinelas15k'),
('Eco Trail Litorânea 8K', 8, '2025-09-07 08:00:00', 'Praia do Rosa', 300, 'mapa_litoranea8k'),
('Ultra Deserto 50K', 50, '2025-10-18 05:00:00', 'Parque Estadual do Jalapão', 50, 'mapa_deserto50k'),
('Trilha da Cachoeira Escondida 12K', 12, '2025-11-23 07:00:00', 'Serra da Bocaina', 130, 'mapa_cachoeira12k'),
('Revezamento da Floresta 40K', 40, '2025-12-13 06:30:00', 'Floresta da Tijuca', 75, 'mapa_revezamento40k'),
('Trilha do Sol Nascente 6K', 6, '2026-01-05 07:00:00', 'Morro da Urca', 180, 'mapa_solnascente6k'),
('Ultra Vulcão 100K', 100, '2026-02-15 04:00:00', 'Planalto Central', 30, 'mapa_vulcao100k'),
('Trilha da Areia Branca 7K', 7, '2026-03-22 08:00:00', 'Dunas de Joaquina', 220, 'mapa_areia7k'),
('Desafio do Rio 25K', 25, '2026-04-19 06:00:00', 'Margens do Rio São Francisco', 90, 'mapa_rio25k'),
('Trilha dos Pinhais 9K', 9, '2026-05-17 07:30:00', 'Campos do Jordão', 160, 'mapa_pinhais9k'),
('Trail do Pôr do Sol 14K', 14, '2026-06-21 16:00:00', 'Serra Gaúcha', 110, 'mapa_pordosol14k'),
('Trilha das Grutas 18K', 18, '2026-07-12 06:30:00', 'Cavernas do Peruaçu', 70, 'mapa_grutas18k'),
('Eco Desafio Lagoa 4K', 4, '2026-08-09 09:00:00', 'Lagoa da Conceição', 280, 'mapa_lagoa4k'),
('Trilha do Ouro 35K', 35, '2026-09-06 05:30:00', 'Estrada Real (MG)', 60, 'mapa_ouro35k'),
('Trail do Farol 11K', 11, '2026-10-11 07:00:00', 'Farol de Santa Marta', 140, 'mapa_farol11k'),
('Trilha da Lua Cheia 16K', 16, '2026-11-08 21:00:00', 'Parque da Cantareira', 100, 'mapa_lua16k'),
('Desafio do Cânion 20K', 20, '2026-12-06 06:00:00', 'Cânion Itaimbezinho', 95, 'mapa_canion20k'),
('Trilha do Mirante 13K', 13, '2027-01-10 07:30:00', 'Pico da Bandeira', 125, 'mapa_mirante13k'),
('Trail da Represa 22K', 22, '2027-02-07 06:30:00', 'Represa de Furnas', 85, 'mapa_represa22k'),
('Trilha do Manguezal 5K', 5, '2027-03-07 08:00:00', 'Manguezal de Guaratuba', 210, 'mapa_manguezal5k'),
('Trail das Cidades Históricas 28K', 28, '2027-04-04 06:00:00', 'Ouro Preto - Mariana', 70, 'mapa_cidades28k'),
('Trilha da Neve 17K', 17, '2027-05-02 05:30:00', 'Serra Nevada (simulado)', 105, 'mapa_neve17k'),
('Eco Sprint 3K', 3, '2027-06-06 09:30:00', 'Parque Ibirapuera (Trilha Urbana)', 350, 'mapa_sprint3k'),
('Trilha dos Vales 45K', 45, '2027-07-04 05:00:00', 'Vale Europeu (SC)', 40, 'mapa_vales45k'),
('Trail do Açúcar 19K', 19, '2027-08-01 07:00:00', 'Pão de Açúcar (RJ)', 115, 'mapa_acucar19k');

INSERT INTO Competicoes (nome, distancia, data_horario, local_competicao, limite_vagas, mapa) VALUES
('Maratona do Rio de Janeiro', 42, '2025-05-18 06:00:00', 'Avenida Niemeyer, RJ', 5000, 'mapa_rio42k'),
('Maratona Internacional de SP', 42, '2025-04-06 06:30:00', 'Parque do Ibirapuera, SP', 4500, 'mapa_sp42k'),
('Meia Maratona de Brasília', 21, '2025-06-01 07:00:00', 'Eixo Monumental, DF', 3000, 'mapa_bsb21k'),
('Maratona de Porto Alegre', 42, '2025-06-15 06:00:00', 'Orla do Guaíba, RS', 2500, 'mapa_poa42k'),
('10K Circuito das Estações - Verão', 10, '2025-01-26 07:30:00', 'Parque das Nações, SP', 8000, 'mapa_estacoes10k'),
('Maratona da Liberdade (Belo Horizonte)', 42, '2025-09-07 06:30:00', 'Praça da Liberdade, MG', 3500, 'mapa_bh42k'),
('Meia Maratona Histórica de Ouro Preto', 21, '2025-10-12 07:00:00', 'Centro Histórico, MG', 1500, 'mapa_op21k'),
('Maratona do Vinho (Vale dos Vinhedos)', 42, '2025-03-09 06:00:00', 'Bento Gonçalves, RS', 1200, 'mapa_vinho42k'),
('15K Noturna de Curitiba', 15, '2025-11-29 20:00:00', 'Centro Cívico, PR', 2000, 'mapa_cwb15k'),
('Maratona de Salvador', 42, '2025-12-07 05:30:00', 'Orla de Itapuã, BA', 2800, 'mapa_ssa42k'),
('5K Universitária', 5, '2026-02-08 08:00:00', 'Campus USP, SP', 5000, 'mapa_usp5k'),
('Meia Maratona de Florianópolis', 21, '2026-04-26 06:30:00', 'Beira Mar Norte, SC', 3200, 'mapa_floripa21k'),
('Maratona da Amazônia', 42, '2026-07-05 05:00:00', 'Manaus, AM', 1000, 'mapa_amazonia42k'),
('Corrida do Fogo 10K', 10, '2026-08-23 07:00:00', 'Aterro do Flamengo, RJ', 4000, 'mapa_fogo10k'),
('Maratona de Fortaleza', 42, '2026-10-18 05:30:00', 'Avenida Beira Mar, CE', 2000, 'mapa_for42k'),
('Meia Maratona Golden Run', 21, '2026-11-08 06:00:00', 'Cidade Universitária, SP', 3800, 'mapa_golden21k'),
('Maratona do Descobrimento', 42, '2027-04-21 06:00:00', 'Porto Seguro, BA', 1500, 'mapa_descobrimento42k'),
('16K Desafio Urbano', 16, '2027-01-17 07:00:00', 'Região Central, BH', 2500, 'mapa_urbano16k'),
('Maratona de Curitiba', 42, '2027-03-28 06:30:00', 'Parque Barigui, PR', 3000, 'mapa_cwb42k'),
('Meia Maratona de Goiânia', 21, '2027-05-09 07:00:00', 'Parque Flamboyant, GO', 2200, 'mapa_gyn21k'),
('10 Milhas da Paz', 16, '2027-08-15 07:30:00', 'Caminhos Rurais, RS', 1800, 'mapa_paz10m'),
('Maratona Internacional de Foz do Iguaçu', 42, '2027-09-26 06:00:00', 'Cataratas do Iguaçu, PR', 2500, 'mapa_foz42k'),
('5K Kids Run', 5, '2027-10-31 09:00:00', 'Parque da Cidade, DF', 6000, 'mapa_kids5k'),
('Maratona de Recife', 42, '2027-11-14 05:30:00', 'Orla de Boa Viagem, PE', 2700, 'mapa_rec42k'),
('Meia Maratona do Pão de Açúcar', 21, '2027-12-05 06:00:00', 'Zona Sul, RJ', 3300, 'mapa_pao21k'),
('10K de Aniversário da Cidade', 10, '2028-01-25 07:00:00', 'Avenida Principal, SP', 5500, 'mapa_aniver10k'),
('Maratona da Primavera', 42, '2028-09-24 06:30:00', 'Região de Campinas, SP', 2900, 'mapa_primavera42k'),
('25K Desafio das Pontes', 25, '2028-10-08 06:00:00', 'Recife (Pontes), PE', 1700, 'mapa_pontes25k'),
('Maratona do Sol', 42, '2028-11-26 05:00:00', 'Natal, RN', 1900, 'mapa_sol42k'),
('Corrida da Virada 15K', 15, '2028-12-31 17:00:00', 'Avenida Paulista, SP', 7000, 'mapa_virada15k');

INSERT INTO CorridaTrilhas (cod_corridaTrilha, checkpoints, dificuldade) VALUES
(1, 4, 'Média'), (2, 7, 'Difícil'), (3, 2, 'Fácil'), (4, 5, 'Difícil'), (5, 1, 'Fácil'),
(6, 4, 'Média'), (7, 2, 'Fácil'), (8, 9, 'Difícil'), (9, 3, 'Média'), (10, 6, 'Difícil'),
(11, 2, 'Fácil'), (12, 12, 'Difícil'), (13, 2, 'Fácil'), (14, 5, 'Média'), (15, 3, 'Média'),
(16, 4, 'Média'), (17, 5, 'Difícil'), (18, 1, 'Fácil'), (19, 7, 'Difícil'), (20, 3, 'Média'),
(21, 4, 'Média'), (22, 6, 'Difícil'), (23, 4, 'Difícil'), (24, 5, 'Média'), (25, 2, 'Fácil'),
(26, 6, 'Difícil'), (27, 4, 'Difícil'), (28, 1, 'Fácil'), (29, 8, 'Difícil'), (30, 5, 'Média');

INSERT INTO Maratonas (cod_maratona) VALUES
(31), (32), (33), (34), (35), (36), (37), (38), (39), (40),
(41), (42), (43), (44), (45), (46), (47), (48), (49), (50),
(51), (52), (53), (54), (55), (56), (57), (58), (59), (60);

INSERT INTO Competidores (cod_atleta, cod_competicao, classificacao) VALUES
(2, 31, '12º'),     
(4, 32, '8º'),   
(6, 33, '3º'),   
(7, 34, '25º'),     
(9, 35, '1º'),     
(11, 36, '9º'),      
(13, 37, '5º'), 
(15, 38, '30º'),  
(16, 39, '11°'),                 
(20, 40, '5º'),      
(22, 42, '18º'),   
(24, 45, '15º'),  
(26, 49, '9º'),    
(28, 55, '2º'), 
(30, 60, '12°');

INSERT INTO Competidores (cod_atleta, cod_competicao, classificacao) VALUES
(1, 1, '1º'),      
(3, 2, '25º'),   
(5, 3, '5°'),  
(8, 4, '15º'),      
(10, 5, '11°'),  
(12, 6, '8º'),     
(14, 8, '4°'),
(17, 11, '3º'),   
(19, 14, '10º'),  
(21, 16, '14º'),     
(23, 19, '9º'),      
(25, 22, '7º'),  
(27, 25, '2º'),  
(29, 27, '6º'),     
(18, 30, '17º');   


