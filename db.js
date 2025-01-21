const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'bleslink_db',
  password: '    *',
  port: 5433, // Default PostgreSQL port
});

// Test the connection
pool.connect((err, client, release) => {
    if (err) {
      console.error('Error acquiring client', err.stack);
    } else {
      console.log('Connected to the database successfully!');
      release(); // Release the client back to the pool
    }
  });
  
  module.exports = pool;
