let abc = [
  {
    title: 'one',
    details: 'ads',
    author: {
      name: 'asda',
      email: 'asdasd@gmail.com',
      age: '21',
    },
    tags: ['js', 'mongo'],
  },
  {
    title: 'two',
    details: 'ads',
    author: {
      name: 'asda',
      email: 'asdasd@gmail.com',
      age: '21',
    },
    tags: ['js', 'mongo'],
  },
  {
    title: 'three',
    details: 'ads',
    author: {
      name: 'asda',
      email: 'asdasd@gmail.com',
      age: '21',
    },
    tags: ['js', 'mongo'],
  },
];

db.articles.update(
  { _id: ObjectId('60a740c683d0421184f44a11') },
  { $set: { title: 'onkar' } }
);

db.articles.updateMany({}.{$rename:{"details":"description"}})

db.articles.update({ _id: ObjectId("60a740c683d0421184f44a11") },{ $push: { tags: "node" } })

db.articles.update({title:"onkar"},{$inc:{"author.age":2}})

db.users.find({gender:"Male",sports:"cricket"}).pretty()

db.users.find({$or:[{sports:"cricket"},{sports:"football"}]})

db.users.find({ name: { $in: ["rn"] } })