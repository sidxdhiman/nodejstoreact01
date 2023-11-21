const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Ssid292912",
    database: "test1"
});

app.get("/books", (req, res) => {
    const q = "select * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        console.log("Showing all books");
        return res.json(data);
    })
})

app.listen(8000, () => {
    console.log("Successfully connected to server");
})