const db = require("../data/config")

async function add(user){
    const [id] = await db("users").insert(user);
    return id;
}

function find(){
    return db("users")
}

function findById(id){
    return db("users")
    .where({id})
}

function findByUsername(username) {
    return db("users as u")
    .where("u.username", username)
    .first("u.id", "u.username", "u.email", "u.password");
}

module.exports = {
    add,
    find,
    findByUsername,
    findById
}