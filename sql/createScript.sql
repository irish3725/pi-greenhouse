
/*  in case I forget
  psql -h localhost -U postgres -d postgres -a -f createScript.sql
  psql -h localhost -U postgres -d postgres
*/

-- create greenhouse statistics table if it does not already exist
CREATE TABLE IF NOT EXISTS pi_greenhouse_statistics (
  entry_id serial PRIMARY KEY,
  temperature FLOAT NOT NULL,
  humidity FLOAT NOT NULL,
  fan_power INT NOT NULL,
  time_stamp TIMESTAMP NOT NULL
);

-- create user for react app api (reader)
DO $$
BEGIN
  -- check for existance of reader
  IF NOT EXISTS(SELECT FROM information_schema.enabled_roles WHERE role_name = 'reader') THEN
    CREATE ROLE reader WITH LOGIN PASSWORD 'docker';
    -- allow connect to database
    GRANT CONNECT ON DATABASE postgres TO reader;
    -- allow access to public schema
    GRANT USAGE ON SCHEMA public TO reader;
    -- allow select on pi_greenhouse_statistics
    GRANT SELECT ON pi_greenhouse_statistics TO reader;
  END IF;
END $$;

