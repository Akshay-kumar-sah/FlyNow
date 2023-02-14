const {FligthService} = require('../services/index');


const fligthService = new FligthService();

const create = async (req,res) => {
try {
    const fligth = await fligthService.createFligth(req.body);
    return res.status(201).json({
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
    return res.status(200).json({
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




module.exports = {
    create,
    getAll
}