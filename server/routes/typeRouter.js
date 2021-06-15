const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

router.post('/', typeController.addType);
router.get('/', typeController.getAllTypes);

module.exports = router;