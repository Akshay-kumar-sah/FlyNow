'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fligth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fligth.init({
    flightsNumber: { 
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    airplaneId: { 
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    departureAirportId: { 
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    arrivalAirportId: { 
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    arrivalTime:{ 
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    departureTime: { 
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    price: { 
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    boardingGate: { 
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    totalSeat:{ 
      type:DataTypes.STRING,
      allowNull:false,
      
    }
  }, {
    sequelize,
    modelName: 'Fligth',
  });
  return Fligth;
};