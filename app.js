const sql = require('mssql');

// Configuration object
const config = {
    user: process.env.DB_USER, // Use environment variables for security
    password: process.env.DB_PASSWORD,
    server: 'localhost', // Replace with your server name or IP
    database: 'Demo Database BC (14-0)',
    options: {
        encrypt: false, // Set to true if using Azure SQL Database
        enableArithAbort: true
    }
};

// Connect to the database
async function connectToDatabase() {
    try {
        await sql.connect(config);
        console.log('Connected to the database successfully!');
    } catch (err) {
        console.error('Database connection failed: ', err);
    }
}

// Execute a query
async function executeQuery() {
    try {
        const result = await sql.query`SHOW TABLES;`;
        console.log(result);
    } catch (err) {
        console.error('Query execution failed: ', err);
    }
}

// Run the functions
connectToDatabase().then(executeQuery);