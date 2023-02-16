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

        return res.status(400).json({ 
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