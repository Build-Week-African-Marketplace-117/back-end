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

function findItems(userID) {
    return db("users_items as ui")
    .innerJoin("users as u", "ui.user_id", "u.id")
    .innerJoin("items as i", "ui.item_id", "i.id")
    .where("u.id", userID)
}

module.exports = {
    add,
    find,
    findByUsername,
    findById, 
    findItems
}