const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/mutler-config');
const workerCtrl = require('../controllers/worker');


//Ici on viens ajouter un nouvel item dans la base de données
router.post('/', workerCtrl.createWorker);
  
//Ici on viens modifier un item
router.put('/:id', auth,  workerCtrl.modifyWorker);

//Ici on viens supprimer un item
router.delete('/:id', auth, workerCtrl.deleteWorker);

//Ici on viens chercher tous les items
router.get('/', workerCtrl.getAllWorker);

//Ici on viens chercher par son id notre item
router.get('/:id', workerCtrl.getOneWorker);



module.exports = router;