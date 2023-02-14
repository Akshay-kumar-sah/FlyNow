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

module.exports = {
    create
}