const db = require("../data/config")

async function add(category){
    const [id] = await db("categories").insert(category);
    return id;
}

function find(){
    return db("categories")
}

function findByName(name) {
    return db("categories as c")
    .where("c.name", name)
    .first("c.id", "c.name", "c.priceLow", "c.priceHigh")
}

module.exports = {
    add,
    find,
    findByName
}