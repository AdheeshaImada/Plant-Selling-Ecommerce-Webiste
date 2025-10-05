const mysql = require('mysql');

// 1. Create the connection object using environment variables.
// These variables must be set in the Railway dashboard for your Node.js app service.
// (We are using the public/proxied values you set in the previous step)
const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,     
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQLPORT       
});

// 2. Attempt to connect and log the result.
// This is used for diagnostic logging only; the 'connection' object is still defined 
// even if the connect call fails.
connection.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
    // Note: The rest of the app might still try to run.
    return;
  }
  console.log('✅ Connected to Railway MySQL database.');
});

// 3. EXPORT the connection object.
// This allows other files (like routes/products.js) to import and use it.
module.exports = connection;