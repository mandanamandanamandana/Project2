// Dependencies



require("dotenv").config();
const express = require("express"); //backend framework
const morgan = require("morgan")//logger (everytime a request comes into the server it will log details of the request)
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const PsychedelicsRouter = require("./controllers/psychedelics")
const Psychedelic = require("./models/psychedelics")
//Global Variables

//Create Application Object

const app = express(); 

// establish mongo connection
const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect(process.env.DATABASE_URL)
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


mongoose.connect(DATABASE_URL, CONFIG)
//Mongoose connection events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected to Mongo"))
.on("error", (error) => console.log(error))

// /////Psychedelics Model

// const { Schema, model } = mongoose // destructuring

// const psychedelicSchema = new Schema ({
//     name: String, 
//     benefits: String, 
//     effects: String,
//     anecdotes: String,
//     image: String
// })

// const Psychedelic = model('Psychedelics', psychedelicSchema)


//Register the middleware
app.use(morgan("dev"));
app.use("/static", express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method")); 
// app.use("/psychedelics", PsychedelicsRouter)


// const Psychedelics = model('Psychedelics', psychedelicSchema)
 
//---------
//Routes
//--------

// app.use((request, reponse, next) => {
//     console.log(request.url)
//     next()
// })

app.get("/", (req, res) => {
    res.send("server is running, better catch it!")
})

app.get("/psychedelics/seed", (req, res) => {

    // array of starter fruits
    const startPsychedelics = [
        {name: "LSD", benefits: "new brain connections", effects: "fractal visuals"},
        {name: "Psilocybin", benefits: "new perspective", effects: "grid visuals"},
        {name: "DMT", benefits: "view into different dimensions", effects: "new way of seeing life"}
        ]
  
    // Delete all psychedelics
    Psychedelic.deleteMany({}, (err, data) => {
      // Seed Starter psych
      Psychedelic.create(startPsychedelics,(err, data) => {
          // send created psych as response to confirm creation
          res.json(data);
        }
      );
    });
  });

//   app.get('/psychedelics', (req, res) => {
//          //get all psychedelics from mongo and send them back
//     Psychedelic.find({})
//         .then((psychedelics) => {
//             res.render('psychedelics/index.ejs', { psychedelics })
//         })
//         .catch(err => console.log(err))
//   })

app.use("/psychedelics", PsychedelicsRouter)

//Create server listener

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})