DROP TABLE IF EXISTS actors;

CREATE  TABLE actors (
    id SERIAL PRIMARY KEY,
    Name TEXT,
    Age INT,
    Number_of_Oscars INT
)

-- INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Leonardo Di Caprio', 41 ,1);
-- INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Jennifer Lawrence', 25 ,1);
-- INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Samuel L. Jackson', 67 ,0);
-- INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Meryl Streep', 66 ,3);
-- INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('John Cho', 43 ,0);
-- INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Gabriel C. Moris', 32 ,10);
-- SELECT * FROM actors