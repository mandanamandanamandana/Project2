// Dependencies 

const { Router } = require("express")
const express = require("express")
const Psychedelics = require("../models/psychedelics")

// Create Router Object

const router = express.Router()

//ERROR HANDLER
function errorHandler(error, res){
    res.json(error)
}

// INDEX GET /psychedelics =-> get a list of psychedelics
//INDUCES


router.get("/", (req, res) => {
     Psychedelics.find({}, (err, psychedelics) => {
        console.log(psychedelics)
        res.render("psychedelics/index.ejs", {psychedelics}
        )
    })
})


//NEW ROUTE GET /psychedelics/new - page with a create form
router.get("/new", (req, res) => {
    res.render("psychedelics/new.ejs")
})

router.post('/', (req, res) => {
    console.log(req.body)
    Psychedelics.create(req.body, (err, createdPsychedelic) => {
        console.log(createdPsychedelic, err)
        res.redirect('/psychedelics')
    })
})
//DESTROY ROUTE - Delete - Delete one psychedlic

router.delete('/:id', (req, res) => {

    Psychedelics.findByIdAndDelete(req.params.id, (err, deletedPsychedelic) => {
        console.log(err, deletedPsychedelic)
        res.redirect('/psychedelics') 


    }) 
})
//Update route put /:id/edit
// router.put("/:id", (req, res) => {
//     res.json(req.body)
// })

// //Create Route POST /psychedelics - create a new psychedelic. redirect back to index page
// router.post("/", (req, res) => {
//     Psychedelics.create((req.body), (err, psychedelic) => {
//     res.redirect("/psychedelics", {psychedelics}
//     )}
// })

// EDIT Route get /psychedelics/:id/edit
router.get("/:id/edit", (req, res) => {

    const id = req.params.id
    Psychedelics.findById(id, (err, psychedelic) => {
        res.render("psychedelics/edit.ejs", {psychedelic})
    }) 
}) 

router.put('/:id', (req, res) => {
    console.log(req.params.id)
     Psychedelics.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPsychedelic) => {
        res.redirect(`/psychedelics/${req.params.id}`)
     })

})
// route.put()

// SHOW ROUTE /psychedelucs/:id -> page of individual psychedelic

router.get("/:id", (req, res) => {
    Psychedelics.findById(req.params.id)
    .then((psychedelic)=> { 
        res.render("psychedelics/show.ejs", {psychedelic} 
    )}
)})
 
// //SEED ROUTE
// // router.get("/seed", async (req, res) => {
// //     await Psychedelics.remove({}).catch((error) => errorHandler(error, res))
// //     const psychedelics = await Psychedelic.create([
// //         {name: "LSD", benefits: "new brain connections", effects: "fractal visuals"},
// //         {name: "Psilocybin", benefits: "new perspective", effects: "grid visuals"},
// //         {name: "DMT", benefits: "view into different dimensions", effects: "new way of seeing life"}
// //     ]).catch((error) => errorHandler(error, res))
// //     res.json(psychedelics)
// //
// // Router.get("/", (req, res) => {
// //     res.send("You hit the psychedelics router")
// // })

module.exports = router