// Dependencies 

const { Router } = require("express")
const express = require("express")
const Psychdelics = require("../models/psychedelics")

// Create Router Object

const router = express.Router()

// INDEX GET /psychedelics =-> get a list of psychedelics

router.get("/", (req, res) => {
    res.render("main.ejs", {
        psychdelics: Psychdelics.getAll()
    })
})

//NEW ROUTE GET /psychedelics/new - page with a create form
router.get("/new", (req, res) => {
    res.render("new.ejs")
})
//Create Route POST /psychedelics - create a new soda. redirect back to index page
router.post("/", (req, res) => {
    
})

// SHOW ROUTE /psychedelucs/:id -> page of individual psychedelic

router.get("/:id", (req, res) => {
    res.render("show.ejs", {
        psychedelic: Psychdelics.getOne(req.params.id)
    })
})
 
Router.get("/", (req, res) => {
    res.send("You hit the psychedelics router")
})

module.exports = router  