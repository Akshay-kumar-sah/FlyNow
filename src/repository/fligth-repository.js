const {Fligth} = require('../models/index');
const {Op}= require('sequelize');

class FligthRepository{

    // private member filed 
    #createFilter(data){
        let filter = {};

        if(data.arrivalAirportId){
            filter.arrivalAirportId =data.arrivalAirportId;
        }

        if(data.departureAirportId){
             filter.departureAirportId = data.departureAirportId;
        }

        // iss trah se use nhi krenge kyunki sbse niche wala override kr jayega 
    //     if(data.minPrice && data.maxPrice) {
    //         Object.assign(filter,{
    //             [Op.and]:[
    //                 {price:{[Op.gte]:data.minPrice}},{price:{[Op.lte]:data.maxPrice}}
    //             ],
            
    //         }); 
    //    }
       let priceFilter = [];

        if(data.minPrice){
             //Object.assign(filter,{price:{[Op.gte]:data.minPrice}}); // gte-> greater than equal to 
             priceFilter.push({price:{[Op.gte]:data.minPrice}});
        }

        if(data.maxPrice){
           // Object.assign(filter,{price:{[Op.lte]:data.maxPrice}}); // lte-> less than equal to 
           priceFilter.push({price:{[Op.lte]:data.maxPrice}});
       }

       Object.assign(filter,{[Op.and] :priceFilter});
        return filter;
    }

async createFligth (data){

    try {
      
        const fligth = await Fligth.create(data);
        return fligth;
    } catch (error) {
        console.log("Something went wrong in reposityory layer");
        throw(error);
  
    }

}


async getFligth(fligthId) {
    try {
        const fligth = await Fligth.findByPk(fligthId);
        return fligth;
    } catch (error) {
        console.log("Something went wrong in reposityory layer");
        throw(error);
  
    }

}


async getAllFligths(filter) {
    try {
        const filterObject = this.#createFilter(filter);
        const fligth = await Fligth.findAll({
            where:filterObject
        });
        return fligth;
    } catch (error) {
        console.log("Something went wrong in reposityory layer");
        throw(error);
  
    }

}

}

module.exports = FligthRepository;