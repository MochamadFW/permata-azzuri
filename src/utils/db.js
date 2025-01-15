const mysql = require('mysql2')

async function connectDB() {
    try {
        await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'klinikme',
            port: '3306'
        });
        console.log("Connected to Database");
    } catch (error) {
        console.error("Failed to connect to database");
        process.exit(1);
    }
}

module.exports= connectDB;