
-- create greenhouse statistics table if it does not already exist
CREATE TABLE IF NOT EXISTS pi_greenhouse_statistics (
  entry_id serial PRIMARY KEY,
  temperature FLOAT NOT NULL,
  humidity FLOAT NOT NULL,
  time_stamp TIMESTAMP NOT NULL
);

-- create user for react app api (reader)
CREATE ROLE IF NOT EXISTS reader;
-- allow connect to database
GRANT CONNECT ON DATABASE postgres TO reader;
-- allow access to public schema
GRANT USAGE ON SCHEMA public TO reader;
-- allow select on pi_greenhouse_statistics
GRANT SELECT ON pi_greenhouse_statistics TO reader;

-- practice insert column
INSERT INTO pi_greenhouse_statistics VALUES (
  default, -- entry_id
  -- generate random number between 75 and 90 for temperature
  (floor(random() * 1500) / 100 + 75), 
  -- generate random number between 60 and 100 for humidity
  (floor(random() * 4000) / 100 + 60), 
  localtimestamp
);

-- view all columns
SELECT * FROM pi_greenhouse_statistics;

