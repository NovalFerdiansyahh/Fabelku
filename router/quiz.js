const quizController = require('../controllers/quiz');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/', quizController.findone);
router.put('/', quizController.update);
router.delete('/', quizController.delete);
router.get('/', quizController.getByCategoryId);
router.get('/', quizController.getByLevelId);

module.exports = router;