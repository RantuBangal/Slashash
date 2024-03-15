const mysql = require('mysql');

//creating connection
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root123',
    database: 'slashash1'
})

db.connect((err)=>{
    if(err) console.log(`error connecting ${err}`);
    else console.log(`Connected to DB`)
})


//exporting db
module.exports = {
    db
}