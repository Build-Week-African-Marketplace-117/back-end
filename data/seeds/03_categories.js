
exports.seed = async function(knex) {
  await knex("categories").insert([
    {id: 1, name: "Fruits", priceLow: 2.00, priceHigh: 30.00},
    {id: 2, name: "Vegetables", priceLow: 2.00, priceHigh: 35.00},
    {id: 3, name: "Grains", priceLow: 2.00, priceHigh: 25.00},
    {id: 4, name: "Fish", priceLow: 2.00, priceHigh: 32.00},
    {id: 5, name: "Chicken", priceLow: 2.00, priceHigh: 20.00},
    {id: 6, name: "Nuts", priceLow: 2.00, priceHigh: 10.00},
    {id: 7, name: "Legumes", priceLow: 2.00, priceHigh: 12.00},
  ])
};
