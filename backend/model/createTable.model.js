const mysql = require('mysql');
const { db } = require('../config/db');


//creating table schema
const createTable = (req, res, next) => {
    try {
        const createTableQuery = 
        `CREATE TABLE IF NOT EXISTS favourites (
            id VARCHAR(255) PRIMARY KEY,
            content TEXT NOT NULL,
            author VARCHAR(255) NOT NULL
        )`
        db.query(createTableQuery, (err, result) => {
            if(err) res.json(err);
            else next();
        })
    } catch (error) {
        res.json(error);
    }
}


//exporting model
module.exports = {
    createTable
}

