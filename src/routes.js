const router = require('express').Router();

import NotaController from './controllers/NotaController'

router.post('/crear',NotaController.nuevaNota);
router.get('/all',NotaController.allNotas);
router.get('/nota/:id',NotaController.nota);
router.put('/update/:id',NotaController.update);
router.delete('/delete/:id',NotaController.delete);
module.exports = router;