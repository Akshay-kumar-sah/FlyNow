/

    -  src/

      index.js // server

      models/
      controllers/
      middlewares/
      services/
      utils/
      config/
      repository/
      

    - test/[later]


    -Database
    -Fligths
    -Airoplane
    -Airport
    -City
    

    ## Tables 
    ## Command -> `npx sequelize model:generate --name City --attributes name:String`
      ## City -> id , name , created_at , updated_at , search_at
     ## `npx sequelize db:migrate`

      ## Command -> `npx sequelize model:generate --name Airport --attributes name:String,address:String,CityId:Integer` 
      ## Airpot -> id , name , address, city_id , updated_at , create_at 
         Relationship -> City has many airports and Airport belong to a city (one to many)
           ## `npx sequelize db:migrate`
           seeders/
           ## Command -> `npx sequelize seed:generate --name add-airports`
             ## `npx sequelize db:seed:all`
             
             ## Join the two tables 
             `select * from airports Join cities on airports.CityId = cities.id where cities.id = 3;`
       ##Airoplane -> modelNumber, capacity, id
          ## `npx sequelize model:generate --name Airplane --attributes modelNumber:String, capacity:integer`

          ## `npx sequelize seed:generate --name add-airplanes`
          ## `npx sequelize db:seed:all`

      ## Flights -> fligthNumber, airplaneId,departureAirporId,arrivalAirpotId,arrivalTime ,departureTime, price , boardingGate,totalSeat
        `npx sequelize model:generate --name Fligth --attributes flightsNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeat:integer, `


