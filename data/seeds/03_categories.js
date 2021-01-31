
exports.seed = async function(knex) {
  await knex("categories").insert([
    {id: 1, name: "Fruits", priceLow: 2.00, priceHigh: 30.00}
  ])
};
