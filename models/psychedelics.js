const Psychdelics = {
    data: [
        {name: "Psilocybin", nickname: "mushrooms"},
        {name: "LSD", nickname: "acid"}
    ],
    getAll: function(){
         return this.data
    },
    getOne: function(index){
        return this.data[index]
    }
}

module.exports = Psychdelics