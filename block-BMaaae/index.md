writeCode

Write code to:-

- create a database named `sports`.
- list all databases present in local mongod server.
- create 3 collections named `cricket`, `football`, `TT` in sports databse.
- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
- list all collections in sports database.
- rename `TT` collection to `tennis`. //db.TT.renameCollection("tennis")
- create a capped collection called `khokho` which should have max 3 documents. // db.createCollection("khokho",{capped:true,size:1024,max:3})
  Try inserting more than 3 and see what happens? //db.khokho.insert({name:"sachin",age:"45",email:"oshingate@gmail.com"})
- check whether a collection is capped or not? //db.khokho.isCapped()
- drop all documents from `football` collection. //db.football.drop()
- delete cricket collection completely. //db.cricket.drop()
- delete sports database. //db.dropDatabase()
- check which database you are connected to ?
- connect to test database //use test
