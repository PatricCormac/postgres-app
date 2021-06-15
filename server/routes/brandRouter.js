const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');

router.post('/', brandController.addBrand);
router.get('/', brandController.getAllBrands);

module.exports = router;