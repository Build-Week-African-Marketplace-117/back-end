const db = require("../data/config");

async function add(item) {
  const [id] = await db("items").insert(item);
  return id;
}

function find() {
  return db("items");
}

module.exports = {
  add,
  find,
};
