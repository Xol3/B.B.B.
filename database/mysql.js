// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode1',
  database: 'BBB',
};

const connection = mysql.createConnection(config);

const postUser = function (descript, email, password, cb){
  connection.query(
    'INSERT INTO User (user, email, passcode) VALUES ( ? , ? , ? );',
    [descript, email, password],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    }
  );
};


module.exports = {
  postUser,
};
