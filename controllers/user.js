const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
// const filterUserData = require('../middleware/filterUserData');


exports.singup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            pseudo: req.body.pseudo,
            email: req.body.email,
            password: hash
        });
        user.save()
            .then(() =>res.status(201).json({ message: 'Utilisateur créé'}))
            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json(error));
};

exports.login = (req, res, next) => {
    User.findOne({ pseudo: req.body.pseudo })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        pseudo: user.pseudo,
                        userId: user._id,
                        email: user.email,
                        xp: user.xp,
                        level: user.level,
                        avatar: user.avatar,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };

 exports.getAllUsers = (req, res, next) => {
    // .find() permet de récuperer les items de notre bdd
    //Ont peux également lui rajouter des params pour filtrer la récuperation
    User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
    // Movie.getMovieWithWorker((err, MovieWithWorker) => {
    //     if (err) {
    //       return console.error(err);
    //     }
    //     console.log(MovieWithWorker);
    //   })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }));
}
