const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'reader',
  host: 'localhost',
  database: 'postgres',
  password: 'docker',
  port: 5432,
});

const getCurrentTemp = (request, response) => {
  pool.query('SELECT temperature FROM pi_greenhouse_statistics ORDER BY entry_id DESC LIMIT 1;', (error, results) => {
    if (error) {
      throw error;
    };
    response.status(200).json(results.rows);
  });
}

const getCurrentHumidity = (request, response) => {
  pool.query('SELECT humidity FROM pi_greenhouse_statistics ORDER BY entry_id DESC LIMIT 1;', (error, results) => {
    if (error) {
      throw error;
    };
    response.status(200).json(results.rows);
  });
}

const getCurrentFanPower = (request, response) => {
  pool.query('SELECT fan_power FROM pi_greenhouse_statistics ORDER BY entry_id DESC LIMIT 1;', (error, results) => {
    if (error) {
      throw error;
    };
    response.status(200).json(results.rows);
  });
}

const getStats = (request, response) => {
  const rows = parseInt(request.params.rows);

  pool.query('SELECT entry_id, temperature, humidity, fan_power, time_stamp FROM pi_greenhouse_statistics ORDER BY entry_id DESC LIMIT $1;', [rows], (error, results) => {
    if (error) {
      throw error;
    };
    response.status(200).json(results.rows);
  });
}

module.exports = {
  getCurrentTemp,
  getCurrentHumidity,
  getCurrentFanPower,
  getStats,
}

