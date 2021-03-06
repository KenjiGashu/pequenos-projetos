--
-- PostgreSQL database dump
--

-- Dumped from database version 10.2
-- Dumped by pg_dump version 10.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cd; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE cd (
    numero integer NOT NULL,
    tema character varying(255) NOT NULL,
    id_produto integer NOT NULL
);


ALTER TABLE cd OWNER TO pe_de_chinelo;

--
-- Name: cd_numero_seq; Type: SEQUENCE; Schema: public; Owner: pe_de_chinelo
--

CREATE SEQUENCE cd_numero_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE cd_numero_seq OWNER TO pe_de_chinelo;

--
-- Name: cd_numero_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pe_de_chinelo
--

ALTER SEQUENCE cd_numero_seq OWNED BY cd.numero;


--
-- Name: compra; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE compra (
    id bigint NOT NULL,
    id_produto integer NOT NULL,
    id_pessoa integer NOT NULL,
    data date NOT NULL
);


ALTER TABLE compra OWNER TO pe_de_chinelo;

--
-- Name: compra_id_seq; Type: SEQUENCE; Schema: public; Owner: pe_de_chinelo
--

CREATE SEQUENCE compra_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE compra_id_seq OWNER TO pe_de_chinelo;

--
-- Name: compra_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pe_de_chinelo
--

ALTER SEQUENCE compra_id_seq OWNED BY compra.id;


--
-- Name: databasechangelog; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE databasechangelog (
    id character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    filename character varying(255) NOT NULL,
    dateexecuted timestamp without time zone NOT NULL,
    orderexecuted integer NOT NULL,
    exectype character varying(10) NOT NULL,
    md5sum character varying(35),
    description character varying(255),
    comments character varying(255),
    tag character varying(255),
    liquibase character varying(20),
    contexts character varying(255),
    labels character varying(255),
    deployment_id character varying(10)
);


ALTER TABLE databasechangelog OWNER TO pe_de_chinelo;

--
-- Name: databasechangeloglock; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE databasechangeloglock (
    id integer NOT NULL,
    locked boolean NOT NULL,
    lockgranted timestamp without time zone,
    lockedby character varying(255)
);


ALTER TABLE databasechangeloglock OWNER TO pe_de_chinelo;

--
-- Name: estoque; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE estoque (
    id_produto integer NOT NULL,
    quantidade integer NOT NULL
);


ALTER TABLE estoque OWNER TO pe_de_chinelo;

--
-- Name: livro; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE livro (
    id bigint NOT NULL,
    titulo character varying(255) NOT NULL,
    autor character varying(255) NOT NULL,
    editora character varying(255) NOT NULL,
    id_produto integer NOT NULL
);


ALTER TABLE livro OWNER TO pe_de_chinelo;

--
-- Name: livro_id_seq; Type: SEQUENCE; Schema: public; Owner: pe_de_chinelo
--

CREATE SEQUENCE livro_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE livro_id_seq OWNER TO pe_de_chinelo;

--
-- Name: livro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pe_de_chinelo
--

ALTER SEQUENCE livro_id_seq OWNED BY livro.id;


--
-- Name: pessoa; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE pessoa (
    id bigint NOT NULL,
    nome character varying(255) NOT NULL,
    "associado?" boolean,
    cpf character varying(14),
    rg character varying(14),
    telefone character varying(20)
);


ALTER TABLE pessoa OWNER TO pe_de_chinelo;

--
-- Name: pessoa_id_seq; Type: SEQUENCE; Schema: public; Owner: pe_de_chinelo
--

CREATE SEQUENCE pessoa_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pessoa_id_seq OWNER TO pe_de_chinelo;

--
-- Name: pessoa_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pe_de_chinelo
--

ALTER SEQUENCE pessoa_id_seq OWNED BY pessoa.id;


--
-- Name: preco; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE preco (
    id bigint NOT NULL,
    preco numeric NOT NULL,
    data_inicio date NOT NULL,
    data_fim date
);


ALTER TABLE preco OWNER TO pe_de_chinelo;

--
-- Name: preco_id_seq; Type: SEQUENCE; Schema: public; Owner: pe_de_chinelo
--

CREATE SEQUENCE preco_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE preco_id_seq OWNER TO pe_de_chinelo;

--
-- Name: preco_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pe_de_chinelo
--

ALTER SEQUENCE preco_id_seq OWNED BY preco.id;


--
-- Name: produto; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE produto (
    id bigint NOT NULL,
    id_preco integer NOT NULL
);


ALTER TABLE produto OWNER TO pe_de_chinelo;

--
-- Name: produto_id_seq; Type: SEQUENCE; Schema: public; Owner: pe_de_chinelo
--

CREATE SEQUENCE produto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE produto_id_seq OWNER TO pe_de_chinelo;

--
-- Name: produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pe_de_chinelo
--

ALTER SEQUENCE produto_id_seq OWNED BY produto.id;


--
-- Name: transacao; Type: TABLE; Schema: public; Owner: pe_de_chinelo
--

CREATE TABLE transacao (
    id integer NOT NULL,
    valor numeric NOT NULL,
    descricao character varying(100),
    id_pessoa integer NOT NULL,
    id_produto integer,
    data date NOT NULL
);


ALTER TABLE transacao OWNER TO pe_de_chinelo;

--
-- Name: transacao_id_seq; Type: SEQUENCE; Schema: public; Owner: pe_de_chinelo
--

CREATE SEQUENCE transacao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE transacao_id_seq OWNER TO pe_de_chinelo;

--
-- Name: transacao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pe_de_chinelo
--

ALTER SEQUENCE transacao_id_seq OWNED BY transacao.id;


--
-- Name: cd numero; Type: DEFAULT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY cd ALTER COLUMN numero SET DEFAULT nextval('cd_numero_seq'::regclass);


--
-- Name: compra id; Type: DEFAULT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY compra ALTER COLUMN id SET DEFAULT nextval('compra_id_seq'::regclass);


--
-- Name: livro id; Type: DEFAULT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY livro ALTER COLUMN id SET DEFAULT nextval('livro_id_seq'::regclass);


--
-- Name: pessoa id; Type: DEFAULT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY pessoa ALTER COLUMN id SET DEFAULT nextval('pessoa_id_seq'::regclass);


--
-- Name: preco id; Type: DEFAULT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY preco ALTER COLUMN id SET DEFAULT nextval('preco_id_seq'::regclass);


--
-- Name: produto id; Type: DEFAULT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY produto ALTER COLUMN id SET DEFAULT nextval('produto_id_seq'::regclass);


--
-- Name: transacao id; Type: DEFAULT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY transacao ALTER COLUMN id SET DEFAULT nextval('transacao_id_seq'::regclass);


--
-- Data for Name: cd; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY cd (numero, tema, id_produto) FROM stdin;
1	um tema qualquer	2
2	mais um cd!	3
50	cd de numero 50	4
76	esse tema eh muito bom 76	5
92	olha esse cd --> 92	6
3	o terceiro rei de cou	12
4	agar agar	13
5	sem topo nao tem bottom	14
\.


--
-- Data for Name: compra; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY compra (id, id_produto, id_pessoa, data) FROM stdin;
1	2	1	2018-01-17
2	3	1	2018-01-17
3	4	2	2018-01-12
4	5	2	2018-01-12
5	7	3	2018-02-12
6	7	4	2018-02-12
7	8	3	2018-02-20
8	2	4	2018-02-25
9	9	4	2018-01-23
10	10	5	2018-01-22
11	11	5	2018-01-21
12	12	5	2018-01-20
13	12	6	2018-01-20
14	11	6	2018-01-20
15	12	6	2018-01-19
16	13	1	2018-01-19
17	13	2	2018-01-18
18	13	3	2018-01-18
19	14	3	2018-01-17
20	15	3	2018-01-17
21	16	4	2018-01-11
22	17	5	2018-01-06
\.


--
-- Data for Name: databasechangelog; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) FROM stdin;
1	pe_de_chinelo	db.changelog.xml	2018-02-16 18:34:04.477945	1	EXECUTED	7:9c3372c19a9a720630b030639218d925	createTable tableName=pessoa; createTable tableName=preco; createTable tableName=produto; createTable tableName=cd; createTable tableName=compra; createTable tableName=estoque; createTable tableName=livro		\N	3.5.4	\N	\N	8813244011
\.


--
-- Data for Name: databasechangeloglock; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY databasechangeloglock (id, locked, lockgranted, lockedby) FROM stdin;
1	f	\N	\N
\.


--
-- Data for Name: estoque; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY estoque (id_produto, quantidade) FROM stdin;
2	100
3	200
4	200
5	250
6	250
7	250
8	250
9	250
10	250
11	250
12	300
13	500
14	200
15	1000
16	2000
17	3400
\.


--
-- Data for Name: livro; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY livro (id, titulo, autor, editora, id_produto) FROM stdin;
1	o primeiro livro	o autor vcs ja conhecem	a editora secreta	7
2	o titulo nao faz sentido	berinjela bife	uma editora que ninguem gosta	8
3	mango is not an item	lolie elie	enfim, sera?	8
4	i like to draw singsing	lolie elie	enfim, sera?	9
5	livro legal	o cara que comeu banana	com quem sera	10
6	nanda kore	tetsushi	akala hangaru	11
7	ue wo muite	tetsushi harada	natura	15
8	karada ga naiteiru toki	tetsushi harada	natura	16
9	itsumo boku wa	tetsushi harada	natura	17
\.


--
-- Data for Name: pessoa; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY pessoa (id, nome, "associado?", cpf, rg, telefone) FROM stdin;
2	lembraujo	t	6263520391	72646373	\N
3	coruja	t	1726352512	9398572o9	\N
4	kakaroto	f	837464837	137466712	\N
5	algoritmo	f	38272647328	7463829471	\N
6	ruju	t	7361524214	264758371	\N
1	araujo	t	83627162833	827374859	+55(11)987653782
\.


--
-- Data for Name: preco; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY preco (id, preco, data_inicio, data_fim) FROM stdin;
2	13.2	2010-10-17	2010-08-02
3	12.2	2010-10-17	2010-08-02
4	8.22	2010-11-17	2010-04-02
5	25.98	2018-01-01	2018-02-04
6	7.98	2018-01-06	2018-02-23
7	11.02	2018-01-17	2018-02-17
8	43.02	2018-01-01	2018-02-21
9	33.02	2018-01-12	2018-02-26
\.


--
-- Data for Name: produto; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY produto (id, id_preco) FROM stdin;
2	2
3	3
4	4
5	5
6	6
7	7
8	8
9	9
10	2
11	3
12	4
13	5
14	6
15	7
16	8
17	9
\.


--
-- Data for Name: transacao; Type: TABLE DATA; Schema: public; Owner: pe_de_chinelo
--

COPY transacao (id, valor, descricao, id_pessoa, id_produto, data) FROM stdin;
1	13.2	compra de produto	4	2	2018-02-25
2	13.2	compra de produto	1	2	2018-01-17
3	12.2	compra de produto	1	3	2018-01-17
4	8.22	compra de produto	2	4	2018-01-12
5	25.98	compra de produto	2	5	2018-01-12
6	11.02	compra de produto	4	7	2018-02-12
7	11.02	compra de produto	3	7	2018-02-12
8	43.02	compra de produto	3	8	2018-02-20
9	33.02	compra de produto	4	9	2018-01-23
10	13.2	compra de produto	5	10	2018-01-22
11	12.2	compra de produto	6	11	2018-01-20
12	12.2	compra de produto	5	11	2018-01-21
13	8.22	compra de produto	6	12	2018-01-19
14	8.22	compra de produto	6	12	2018-01-20
15	8.22	compra de produto	5	12	2018-01-20
16	25.98	compra de produto	3	13	2018-01-18
17	25.98	compra de produto	2	13	2018-01-18
18	25.98	compra de produto	1	13	2018-01-19
19	7.98	compra de produto	3	14	2018-01-17
20	11.02	compra de produto	3	15	2018-01-17
21	43.02	compra de produto	4	16	2018-01-11
22	33.02	compra de produto	5	17	2018-01-06
\.


--
-- Name: cd_numero_seq; Type: SEQUENCE SET; Schema: public; Owner: pe_de_chinelo
--

SELECT pg_catalog.setval('cd_numero_seq', 2, true);


--
-- Name: compra_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pe_de_chinelo
--

SELECT pg_catalog.setval('compra_id_seq', 22, true);


--
-- Name: livro_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pe_de_chinelo
--

SELECT pg_catalog.setval('livro_id_seq', 9, true);


--
-- Name: pessoa_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pe_de_chinelo
--

SELECT pg_catalog.setval('pessoa_id_seq', 6, true);


--
-- Name: preco_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pe_de_chinelo
--

SELECT pg_catalog.setval('preco_id_seq', 9, true);


--
-- Name: produto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pe_de_chinelo
--

SELECT pg_catalog.setval('produto_id_seq', 17, true);


--
-- Name: transacao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pe_de_chinelo
--

SELECT pg_catalog.setval('transacao_id_seq', 22, true);


--
-- Name: cd pk_cd; Type: CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY cd
    ADD CONSTRAINT pk_cd PRIMARY KEY (numero);


--
-- Name: compra pk_compra; Type: CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY compra
    ADD CONSTRAINT pk_compra PRIMARY KEY (id);


--
-- Name: databasechangeloglock pk_databasechangeloglock; Type: CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY databasechangeloglock
    ADD CONSTRAINT pk_databasechangeloglock PRIMARY KEY (id);


--
-- Name: livro pk_livro; Type: CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY livro
    ADD CONSTRAINT pk_livro PRIMARY KEY (id);


--
-- Name: pessoa pk_pessoa; Type: CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY pessoa
    ADD CONSTRAINT pk_pessoa PRIMARY KEY (id);


--
-- Name: preco pk_preco; Type: CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY preco
    ADD CONSTRAINT pk_preco PRIMARY KEY (id);


--
-- Name: produto pk_produto; Type: CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY produto
    ADD CONSTRAINT pk_produto PRIMARY KEY (id);


--
-- Name: transacao transacao_pkey; Type: CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY transacao
    ADD CONSTRAINT transacao_pkey PRIMARY KEY (id);


--
-- Name: cd fk_autor_produto; Type: FK CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY cd
    ADD CONSTRAINT fk_autor_produto FOREIGN KEY (id_produto) REFERENCES produto(id);


--
-- Name: compra fk_compra_pessoa; Type: FK CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY compra
    ADD CONSTRAINT fk_compra_pessoa FOREIGN KEY (id_pessoa) REFERENCES pessoa(id);


--
-- Name: compra fk_compra_produto; Type: FK CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY compra
    ADD CONSTRAINT fk_compra_produto FOREIGN KEY (id_produto) REFERENCES produto(id);


--
-- Name: estoque fk_estoque_produto; Type: FK CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY estoque
    ADD CONSTRAINT fk_estoque_produto FOREIGN KEY (id_produto) REFERENCES produto(id);


--
-- Name: livro fk_livro_produto; Type: FK CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY livro
    ADD CONSTRAINT fk_livro_produto FOREIGN KEY (id_produto) REFERENCES produto(id);


--
-- Name: produto fk_produto_preco; Type: FK CONSTRAINT; Schema: public; Owner: pe_de_chinelo
--

ALTER TABLE ONLY produto
    ADD CONSTRAINT fk_produto_preco FOREIGN KEY (id_preco) REFERENCES preco(id);


--
-- PostgreSQL database dump complete
--

