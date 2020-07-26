const postgres = require('postgres')
const dotenv = require('dotenv');
dotenv.config();

const options ={
    host        : process.env.DBHOST || localhost,         // Postgres ip address or domain name
    port        : process.env.DBPORT || 0000,       // Postgres server port
    database    : process.env.DBNAME || null,         // Name of database to connect to
    username    : process.env.DBUSERNAME || null,         // Username of database user
    password    : process.env.DBPASSWORD || null,       // Password of database user
    ssl         : process.env.DBSSL || true
    /*transform   : {
      column            : fn, // Transforms incoming column names
      value             : fn, // Transforms incoming row values
      row               : fn  // Transforms entire rows
    }*/
  };

  console.log(options)
  const sql = postgres('postgres://username:password@host:port/database',options);
// sql`select * from memes`

module.exports = {
    get_memes: function get_memes(callback) {
        sql`
            select * from memes
        `
    }
}