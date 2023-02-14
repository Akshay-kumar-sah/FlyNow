const {FligthRepository,AirplaneRepository} = require('../repository/index');
const {compareTime}= require('../utils/helper');


class FligthService{
    constructor(){
     
        this.fligthRepository = new FligthRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

   async createFligth(data){
    

     try {
         if(!compareTime(data.arrivalTie,data.departureTime)){
           throw {error:'Arrival time can not be less than departure time'};
         }
        
     
        const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
        
        const fligth = await this.fligthRepository.createFligth({
            ...data, totalSeat:airplane.capacity
        });
       
     return fligth;

     } catch (error) {
        console.log("Something went wrong in the service layer");
        throw {error};
        
     }

}

async getFligthData(){

}



/**
 * {
 *  fligthNumber
 *  airplaneId
 *  departureAirportId
 *  arrivalAirportId
 *  arrivalTime
 *  departureTime
 *  price 
 *  boardingGate
 *  totalSeat -> airplane  
 * 
 * 
 * }
 * 
 * 
 */

}
module.exports = FligthService;