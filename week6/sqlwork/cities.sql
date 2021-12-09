DROP TABLE IF EXISTS cities;

CREATE  TABLE cities (
    id SERIAL PRIMARY KEY,
    name TEXT,
    countries TEXT,
    population INT
)

-- INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Leonardo Di Caprio', 41 ,1);
-- psql onion -f ./actors.sql
