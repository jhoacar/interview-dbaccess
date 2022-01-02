db.auth('root', 'root')

db = db.getSiblingDB('learning');

// db.createUser({
//     user: "admin",
//     pwd: "admin",
//     roles: [{role: "readWrite", db: "learning"},{role: "root", db: "admin"}]
//   });
  

db.createCollection('test');

db.test.insertOne(
 {
    test:"It's works"
  }
);