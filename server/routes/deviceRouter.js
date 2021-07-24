const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), deviceController.addDevice);
router.get('/', deviceController.getAllDevices);
router.get('/:id', deviceController.getDeviceById);

module.exports = router;