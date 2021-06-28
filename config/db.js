const { Client } = require('pg');

function connectDB(app) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'demo',

  });

  client.connect((err, client) => {
    if (err) {
      console.error('connection error', err)
    } else {
      console.log('db connected')
      app.db = client;
    }
  });

}

module.exports = { connectDB };
