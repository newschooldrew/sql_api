CREATE TABLE monsters(
    id serial,
    name character varying(50),
    personality character varying(50)
);

CREATE TABLE habitats(
    id serial,
    name character varying(50),
    climate character varying(50),
    temperature int
);

CREATE TABLE lives(
    monster character varying(50),
    habitat character varying(50)
);

INSERT INTO monsters(name,personality)
VALUES
('Drew','aggressive'),
('Larry','weird'),
('Adriana','coy');

INSERT INTO habitats(name, climate,temperature)
VALUES
('jungle','tropical','95'),
('tundra','frigid','5'),
('desert','bone dry','115');

INSERT INTO lives(monster,habitat)
VALUES
('Drew','desert'),
('Larry','tundra'),
('Adriana','jungle');