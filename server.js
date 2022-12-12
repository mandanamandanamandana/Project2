// Dependencies

require("dotenv").config();
const express = require("express"); //backend framework
const morgan = require("morgan")//logger (everytime a request comes into the server it will log details of the request)
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const PsychdelicsRouter = require("./controllers/psychdelics")

//Global Variables

//Create Application Object

const app = express(); 

// establish mongo connection
mongoose.connect(process.env.MONGO)

//Mongoose connection events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected to Mongo"))
.on("error", (error) => console.log(error))

//Register the middleware
app.use(morgan("dev"));
app.use("/static", express.static("public"));
app.use("/psychedelics", PsychedelicRouter)
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method")); 
//---------
//Routes
//--------

app.use((request, reponse, next) => {
    console.log(request.url)
    next()
})

app.get("/", (req, res) => {
    res.send("server is working")
})


//Create server listener

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})