const mysql = require('mysql');

const connection = mysql.createConnection({
  host: hopper.proxy.rlwy.net,
  user:root,
  password:YwABBpYUckRrdxokHEAhdaUdfMxvveUp,
  database: railway,
  port: 10213
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected to Railway MySQL database.');
});

module.exports = connection;
