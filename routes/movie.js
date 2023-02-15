const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/mutler-config');
const movieCtrl = require('../controllers/movie');


//Ici on viens ajouter un nouvel item dans la base de données
router.post('/', movieCtrl.createMovie);
  
//Ici on viens modifier un item
router.put('/:id', auth,  movieCtrl.modifyMovie);

//Ici on viens supprimer un item
router.delete('/:id', auth, movieCtrl.deleteMovie);

//Ici on viens chercher tous les items
router.get('/', movieCtrl.getAllMovie);

//Ici on viens chercher par son id notre item
router.get('/:id', movieCtrl.getOneMovie);



module.exports = router;