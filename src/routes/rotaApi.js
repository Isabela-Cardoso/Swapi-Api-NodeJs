//Direcionando a rota para cada ação

const router = require('express').Router();

var planetaController = require('../controllers/planetasController');

//listando planetas
router.route('/planetas').get(planetaController.index);

//deletando planetas por id
router.route('/planetas/id/:planeta_id').get(planetaController.delete);

//adicionando os planetas
router.route('/planetas/adicionar').post(planetaController.view);

//encontrando planet por nome
router.route('/planetas/nome/:nome').get(planetaController.v);

//deletando planeta por is
router.route('/planetas/id/deletar/:planeta_id').delete(planetaController.delete);

module.exports = router;