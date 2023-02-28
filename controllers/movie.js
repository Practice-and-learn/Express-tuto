const Movie = require('../models/Movie');
const fs = require('fs');


exports.createMovie = (req, res, next) => {
    delete req.body._id;
    const movie = new Movie({
    ...req.body
});
    movie.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.modifyMovie = (req, res, next) => {
    Movie.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié'}))
    .catch(error => res.status(400).json({ error }));
}



//supprime un objet seulement si il appartiens à un utilisateur
exports.deleteMovie = (req, res, next) => {
    Movie.findOne({ _id: req.params.id})
        .then(movie => {
            if (movie.userId != req.auth.userId) {
                res.status(401).json({message: 'Not authorized'});
            } else {
                const filename = movie.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Movie.deleteOne({_id: req.params.id})
                        .then(() => { res.status(200).json({message: 'Objet supprimé !'})})
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch( error => {
            res.status(500).json({ error });
        });
 };

exports.getOneMovie = (req, res, next) => {
    Movie.findOne({ _id: req.params.id })
    // Movie.getMovieWithWorker((err, MovieWithWorker) => {
    //     if (err) {
    //       return console.error(err);
    //     }
    //     console.log(MovieWithWorker);
    //   })
    .then(movie => res.status(200).json(movie))
    .catch(error => res.status(404).json({ error }));
}

exports.getAllMovie = (req, res, next) => {
    // .find() permet de récuperer les items de notre bdd
    //Ont peux également lui rajouter des params pour filtrer la récuperation
    Movie.find()
    .then(movies => res.status(200).json(movies))
    .catch(error => res.status(400).json({ error }));
}
