//Direcionando a rota para cada ação

const router = require('express').Router();

var planetaController = require('../controllers/planetasController');

//listando planetas
router.route('/planetas').get(planetaController.index);
console.log('Lista ok')

//deletando planetas por id
router.route('/planetas/id/:planeta_id').get(planetaController.delete);
console.log('Delete por ID ok')


//adicionando os planetas
router.route('/planetas/adicionar').post(planetaController.view);
console.log('Planetas a adicionar ok')

//encontrando planet por nome
router.route('/planetas/nome/:nome').get(planetaController.v);
console.log('Encontrando por ID ok')

//deletando planeta por is
router.route('/planetas/id/deletar/:planeta_id').delete(planetaController.delete);
console.log('Delete ok')


module.exports = router;

