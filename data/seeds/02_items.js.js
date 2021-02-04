
exports.seed = async function(knex) {
  await knex("items").insert([
    {id: 1, location: "Morocco", name: "Bananas", description: "All organic and ready to make some Banana Bread!", price: 5.23},
    {id: 2, location: "Lagos", name: "Durians", description: "Green spikey fruit. Don't get poked!", price: 6.66},
    {id: 3, location: "Kinshasa", name: "Berries", description: "They are berry good!", price: 2.00},
    {id: 4, location: "Cairo", name: "Sugar Cane", description: "Mmmmm sugar.", price: 2.34},
    {id: 5, location: "Giza", name: "Melons", description: "Honeydew and Cantaloupe", price: 5.23},
    {id: 6, location: "Johannesburg", name: "Plums", description: "Nice juicy plums!", price: 7.23},
    {id: 7, location: "Dar es Salaam", name: "Prunes", description: "Not just for the elderly!", price: 5.80},
    {id: 8, location: "Alexandria", name: "Pineapple", description: "Very piney, so you know it's good!", price: 12.34},
  ])
};
