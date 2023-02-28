const {FligthService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes');


const fligthService = new FligthService();

const create = async (req,res) => {
try {
     const fligthRequestData = {
     flightsNumber:req.body.flightsNumber,
     airplaneId:req.body.airplaneId,
     departureAirportId : req.body.departureAirportId ,
     arrivalAirportId :req.body.arrivalAirportId ,
     arrivalTime :req.body.arrivalTime ,
     departureTime:req.body.departureTime,
     price:req.body.price,
     boardingGate :req.body.boardingGate 


     }


    const fligth = await fligthService.createFligth(fligthRequestData);
    return res.status(SuccessCodes.CREATED).json({
     data : fligth,
     success : true,
     err : {},
     message: 'Successfully create a fligth'


    });
    
} catch (error) {
    console.log(error);
    return res.status(500).json({
        data : {},
        success : false,
        message : 'Not able to create a fligth',
        err : error
    });
}
}

const getAll = async (req,res) =>{

   try {
    const response = await fligthService.getAllFligthData(req.query);
    return res.status(SuccessCodes.OK).json({
        data : response,
     success : true,
     err : {},
     message: 'Successfully fetch all  fligths'

    });
    
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        data : {},
        success : false,
        message : 'Not able to fetch  the fligths',
        err : error
    });
   }

}


const get = async (req, res) => {
    try {
        const response = await fligthService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data : response,
         success : true,
         err : {},
         message: 'Successfully fetched the fligths'
    
        });
        
       } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to fetched  the fligth',
            err : error
        });
       }
}


const update = async (req, res) => {
    try {
        const response = await fligthService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data : response,
         success : true,
         err : {},
         message: 'Successfully updated the fligths'
    
        });
        
       } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to update  the fligth',
            err : error
        });
       }
}


module.exports = {
    create,
    getAll,
    get,
    update
}