const {Fligth} = require('../models/index');

class FligthRepository{

async createFligth (data){

    try {
        const fligth = await Fligth.create(data);
        return fligth;
    } catch (error) {
        console.log("Something went wrong in reposityory layer");
        throw(error);
  
    }

}



}

module.exports = FligthRepository;