const {ClientErrorsCodes} = require('../utils/error-codes');

const validateCreateFligth  = (req, res, next) => {

if(
    !req.body.flightsNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price ||
    !req.body.boardingGate 

    ) {

        //if any of the body param is missing we come inside if
        // BadRequest means status code is 400

        return res.status(ClientErrorsCodes.BAD_REQUEST).json({ 
       data : {},
       success : false,
       message : 'Invalid request body for create fligth ',
       err : 'Missing mandatory properties to create a fligth'


        });

}

next();

}
module.exports = {
    validateCreateFligth,
}