const express = require('express');

const CityController = require('../../controllers/city-controller');
const FligthController = require('../../controllers/fligth-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);

router.post('/fligths', FligthController.create);
router.get('/fligths',FligthController.getAll);


module.exports = router;
