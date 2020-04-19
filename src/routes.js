const router = require('express').Router();
const {verificarAuth,vericarAdmin}= require( './middlewares/auth')
const {miNota}= require( './middlewares/notas')
import NotaController from './controllers/NotaController'
import UsuarioController from './controllers/UsuarioController'


router.post('/crear',verificarAuth,NotaController.nuevaNota);
router.get('/all',verificarAuth,NotaController.allNotas);
router.get('/nota/:id',verificarAuth,NotaController.nota);
router.put('/update/:id',[verificarAuth,miNota],NotaController.update);
router.delete('/delete/:id',[verificarAuth,miNota],NotaController.delete);

router.post('/nuevo-usuario',UsuarioController.nuevoUsuario);

router.put('/editar-usuario/:id',[verificarAuth,vericarAdmin],UsuarioController.editarUsuario);
router.post('/login-usuario',UsuarioController.login);

module.exports = router;