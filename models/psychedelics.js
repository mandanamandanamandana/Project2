const mongoose = require("mongoose")


//PSYCHEDELIC SCHEMA - definition/shape of the data type. What does it looks like

const psychedelicSchema = new mongoose.Schema({
    name: {type: String, required: true},
    benefits: String,
    effects: String,
    dangers: String, 
    anecdotes: String,
    image: String
})

//Psychedelic model 

const Psychedelic = mongoose.model("Psychedelic", psychedelicSchema)

// const Psychedelics = {
//     data: [
//         {name: "Psilocybin", nickname: "mushrooms"},
//         {name: "LSD", nickname: "acid"}
//     ],
//     getAll: function(){
//          return this.data
//     },
//     getOne: function(index){
//         return this.data[index]
//     },
//     create: function(newSoda){
//         this.data.push(newSoda)
//     },
//     update: function(index, updates){
//         this.data[index] = updates
//     }
// }

module.exports = Psychedelic