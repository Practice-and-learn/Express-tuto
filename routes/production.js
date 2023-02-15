const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/mutler-config');
const productionCtrl = require('../controllers/production');

router.get('/', productionCtrl.getAllProduction);

router.get('/:id', productionCtrl.getOneProduction);

router.post('/', auth, productionCtrl.createProduction);

router.put('/:id', auth, auth, productionCtrl.modifyProduction);

router.delete('/:id', auth, auth, productionCtrl.deleteProduction);

module.exports = router;