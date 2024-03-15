const express = require("express");
const cors = require("cors");
const { createTable } = require("./model/createTable.model");
const { favQuoteRouter } = require("./routers/favorites.router");
const PORT = 9090;


//initialise the app
const app = express();


//middlewares
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use("/favourites", createTable, favQuoteRouter);


//homepage
app.get("/", (req, res) => {
    res.status(200).json({msg:"welcome to MySQL"})
})


//listening to the server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})