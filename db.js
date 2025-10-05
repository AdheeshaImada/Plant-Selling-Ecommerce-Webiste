const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,     // Should be internal: 'mysql.railway.internal'
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQLPORT       // Should be internal: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected to Railway MySQL database.');
});

module.exports = connection;
