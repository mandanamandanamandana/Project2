// Dependencies 

const { Router } = require("express")
const express = require("express")
const Psychdelics = require("../models/psychedelics")

// Create Router Object

const router = express.Router()

router.get("/", (req, res) => {
    res.render("main")
})
 
Router.get("/", (req, res) => {
    res.send("You hit the psychedelics router")
})

module.exports = router