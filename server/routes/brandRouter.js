const Router = require('express');

const router = new Router();
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), brandController.addBrand);
router.get('/', brandController.getAllBrands);

module.exports = router;
