const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const PORT = 3000;
const app = express();

const db = new sqlite3.Database('./confessions.db', (err) => {
    if (err) {
        console.error("Could not open database.");
    } else {
        console.log("Connected.")
    }
});

let init = () => {
    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS confessions(id INTEGER PRIMARY KEY, confession TEXT NOT NULL)");
    });
};
init();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.post("/confess", (req, res) => {
    const confession = req.body.confession; 
    console.log(confession);
    if (!confession) {
        return res.status(400).send("Confession text is required.");
    }
    db.run("INSERT INTO confessions (confession) VALUES (?)", [confession], function(err) {
        if (err) {
            return res.status(500).send("Error inserting confession.");
        }
        res.redirect("/");
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${3000}`)
});
