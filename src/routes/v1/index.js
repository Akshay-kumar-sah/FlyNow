const express = require('express');
const {FligthMiddleware} = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const FligthController = require('../../controllers/fligth-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);

router.post('/flights',FligthMiddleware.validateCreateFligth, FligthController.create);
router.get('/flights/:id',FligthController.get );
router.get('/flights',FligthController.getAll);
router.patch('/flights/:id',FligthController.update);

router.post('/airports',AirportController.create);

module.exports = router;
