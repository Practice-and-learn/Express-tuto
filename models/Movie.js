const mongoose = require('mongoose');

//Ici le schema de données qui va être renvoyer dans notre BDD mongoDB 
// L'id est incrémenté automatiquement par mongoDB il ne reste plus que les champs à créer
// puis les typer et renseigner si il sont requis ou non

const movieSchema = mongoose.Schema({
    Title: { 
        type: String, 
        required: true, 
        unique: true 
    },
    Description: { 
        type: String, 
        required: false
    },
    Category: { 
        type: String, 
        required: false
    },
    Year: { 
        type: Date, 
        required: false
    },
    Poster: { 
        type: String, 
        required: false
    },
    Actors: [{ type: mongoose.Schema.Types.ObjectId,ref:'Worker', required: false}],
    Director: [{ type: mongoose.Schema.Types.ObjectId,ref:'Worker', required: false}],
    Writter: [{ type: mongoose.Schema.Types.ObjectId,ref:'Worker', required: false}],
    Producer: [{ type: mongoose.Schema.Types.ObjectId,ref:'Worker', required: false}],
    Musiciens: [{ type: mongoose.Schema.Types.ObjectId,ref:'Worker', required: false}],
    ProductionCorp: [{ type: mongoose.Schema.Types.ObjectId,ref:'Production', required: false}],
});

movieSchema.methods.getMovieWithWorker = function (callback) {
    return this.model("Movie")
      .findOne({ title: this.Title})
      .populate("worker")
      .exec(callback);
};

//Ici on exporte le schema en tant que model pour le l'utiliser dans nos fichiers 
module.exports = mongoose.model('Movie', movieSchema);