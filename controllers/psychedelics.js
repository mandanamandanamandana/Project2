// Dependencies 

const { Router } = require("express")
const express = require("express")
const Psychdelics = require("../models/psychedelics")

// Create Router Object

const router = express.Router()

// INDEX GET /psychedelics =-> get a list of psychedelics


router.get("/", (req, res) => {
    res.render("index.ejs", {
        psychdelics: Psychdelics.getAll()
    })
})

//NEW ROUTE GET /psychedelics/new - page with a create form
router.get("/new", (req, res) => {
    res.render("new.ejs")
})
//Create Route POST /psychedelics - create a new soda. redirect back to index page
router.post("/", (req, res) => {
    Psychedelics.create(req.body)
    res.redirect("/psychedelics")
})

// EDIT Route get /psychedelics/:id/edit
router.get("/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        psychedelic:Psychedelics.getOne(req.params.id),
        index: req.params.id
    }) 
}) 
// SHOW ROUTE /psychedelucs/:id -> page of individual psychedelic

router.get("/:id", (req, res) => {
    res.render("show.ejs", {
        psychedelic: Psychdelics.getOne(req.params.id)
    })
})
 
// Router.get("/", (req, res) => {
//     res.send("You hit the psychedelics router")
// })

module.exports = router  