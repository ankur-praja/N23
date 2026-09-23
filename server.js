const express = require('express');
const morgan = require("morgan");

const app = express()

app.use(express.json())
app.use(morgan("dev"))
/* note = { title:string,description:string } */

const notes = []

app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.send("note added successfully")
})

app.get("/notes", (req, res) => {
    res.send(notes)
})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index
    delete notes[ index ]
    res.send("note deleted successfully")
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const description = req.body.description

    notes[ index ].description = description

    res.send("note updated successfully")
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})
