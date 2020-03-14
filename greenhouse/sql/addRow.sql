
/*  in case I forget
  psql -h localhost -U postgres -d postgres -a -f createScript.sql
  psql -h localhost -U postgres -d postgres
*/

-- practice insert column
INSERT INTO pi_greenhouse_statistics VALUES (
  default, -- entry_id
  -- generate random number between 75 and 90 for temperature
  (floor(random() * 1500) / 100 + 75), 
  -- generate random number between 60 and 100 for humidity
  (floor(random() * 4000) / 100 + 60), 
  -- generate random number between 0 and 100 for fan power
  floor(random() * 100), 
  localtimestamp
);

