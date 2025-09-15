--
-- PostgreSQL database dump
--

\restrict y9PTfwoRedr3XKOeFiYjvKaKjcwm8VOGgOHg3V3FtaFIs9zDOZojyLowVCgd3o3

-- Dumped from database version 17.6 (Debian 17.6-1.pgdg13+1)
-- Dumped by pg_dump version 17.6 (Debian 17.6-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: superheroes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.superheroes (
    id integer NOT NULL,
    nickname character varying(100) NOT NULL,
    real_name character varying(100) NOT NULL,
    origin_description character varying(700) NOT NULL,
    superpowers character varying(200) NOT NULL,
    catch_phrase character varying(200) NOT NULL,
    image character varying(300) NOT NULL
);


ALTER TABLE public.superheroes OWNER TO postgres;

--
-- Name: superheroes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.superheroes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.superheroes_id_seq OWNER TO postgres;

--
-- Name: superheroes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.superheroes_id_seq OWNED BY public.superheroes.id;


--
-- Name: superheroes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.superheroes ALTER COLUMN id SET DEFAULT nextval('public.superheroes_id_seq'::regclass);


--
-- Data for Name: superheroes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.superheroes (id, nickname, real_name, origin_description, superpowers, catch_phrase, image) FROM stdin;
3	Batman	Bruce Wayne	After witnessing his parentsтАЩ murder, he trained to become the vigilante protector of Gotham City.	Peak human condition, martial arts mastery, detective skills, advanced technology	I am vengeance, I am the night, I am Batman!	https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg
7	Captain America	Steve Rogers	A frail young man enhanced by the Super-Soldier Serum to become a WWII hero.	Peak human strength, shield mastery, enhanced endurance	I can do this all day.	https://upload.wikimedia.org/wikipedia/en/b/bf/CaptainAmericaHughes.jpg
8	Hulk	Bruce Banner	Exposed to gamma radiation, transforms into a powerful green giant when enraged.	Superhuman strength, regeneration, near invulnerability	Hulk smash!	https://i.redd.it/7bkz4920grfe1.jpeg
9	Thor	Thor Odinson	Norse god of thunder and prince of Asgard, wielder of Mjolnir.	Godlike strength, control over lightning, flight with hammer, immortality	For Asgard!	https://upload.wikimedia.org/wikipedia/uk/1/17/Thor_by_Olivier_Coipel.png
11	Doctor Strange	Stephen Strange	Former surgeon turned Sorcerer Supreme after training in the mystic arts.	Mastery of magic, astral projection, teleportation, time manipulation	By the Hoary Hosts of Hoggoth!	https://cdn.marvel.com/content/1x/drsofasg2025001_cover.jpg
13	Black Panther	T'Challa	King of Wakanda, enhanced by the heart-shaped herb and advanced technology.	Enhanced strength, agility, vibranium suit, master strategist	Wakanda Forever!	https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png
14	Flash	Barry Allen	A forensic scientist struck by lightning, gaining super speed.	Super speed, time travel, accelerated healing	Fastest man alive!	https://cdn.europosters.eu/image/1300/140788.jpg
16	Black Widow	Natasha Romanoff	A former Russian spy turned SHIELD agent and Avenger.	Expert martial artist, espionage, weapon mastery	At some point, we all have to choose between what the world wants you to be and who you are.	https://i.ebayimg.com/images/g/Z4YAAOSwRO9fWuTd/s-l1200.jpg
6	Iron Man	Tony Stark	Genius billionaire builds a high-tech armored suit to fight evil.	Powered armor suit, genius intellect, energy repulsors, flight	I am Iron Man.	https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1619268446i/54776204.jpg
5	Spider-Man	Peter Parker	Bitten by a radioactive spider, he gained arachnid-like powers.	Wall-crawling, spider-sense, super strength, agility, web-shooters	With great power comes great responsibility.	https://images.squarespace-cdn.com/content/v1/657116a6fe13f804cb9773f0/6a82aeeb-d616-43f1-9a3f-fb6c21b26c85/clean+%282%29.jpg
2	Superman	Clark Kent	Born Kal-El on Krypton, rocketed to Earth as an infant before Krypton's destruction.	Solar energy absorption, healing factor, heat vision, flight, super strength, invulnerability	Look, up in the sky, it's a bird, it's a plane, it's Superman!	https://preview.redd.it/what-about-superman-do-you-think-makes-him-the-greatest-v0-08c9a7jru54d1.jpeg?width=1080&crop=smart&auto=webp&s=2805c3c1d1d78470e1bf1b19a7b537685652b824
17	Wonder Woman	Diana Prince	Amazonian princess from Themyscira who entered the world of men to protect humanity.	Super strength, flight, combat skills, Lasso of Truth, immortality	In the name of all that is good, your wrath ends here!	https://m.media-amazon.com/images/I/A1TcUOmXqiL._UF1000,1000_QL80_.jpg
\.


--
-- Name: superheroes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.superheroes_id_seq', 17, true);


--
-- Name: superheroes superheroes_nickname_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.superheroes
    ADD CONSTRAINT superheroes_nickname_key UNIQUE (nickname);


--
-- Name: superheroes superheroes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.superheroes
    ADD CONSTRAINT superheroes_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict y9PTfwoRedr3XKOeFiYjvKaKjcwm8VOGgOHg3V3FtaFIs9zDOZojyLowVCgd3o3

