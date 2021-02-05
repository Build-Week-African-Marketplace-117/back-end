const knex = require("knex");
const env = process.env.DB_ENV || "development";
const config = require("../knexfile");
const db = knex(config[env]);
module.exports = db;









//const knex = require("knex")
// const knexfile = require("../knexfile")

// module.exports = knex(knexfile.development)