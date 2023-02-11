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
    ## Command -> npx sequelize model:generate --name City --attributes name:String
      ## City -> id , name , created_at , updated_at , search_at
     ## npx sequelize db:migrate

      ## Command -> npx sequelize model:generate --name Airport --attributes name:String,address:String,CityId:Integer 
      ## Airpot -> id , name , address, city_id , updated_at , create_at 
         Relationship -> City has many airports and Airport belong to a city (one to many)
           ## npx sequelize db:migrate
         



