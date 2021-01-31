exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("username").notNull().unique();
    table.text("email").notNull().unique();
    table.text("password").notNull();
  });

  await knex.schema.createTable("items", (table) => {
    table.increments("id");
    table.text("location").notNull();
    table.text("name").notNull();
    table.text("description").notNull();
    table.float("price").notNull();
  });

  await knex.schema.createTable("categories", (table) => {
    table.increments("id");
    table.text("name").notNull().unique();
    table.float("priceLow").notNull();
    table.float("priceHigh").notNull();
  });

  await knex.schema.createTable("users_items", (table) => {
    table.integer("user_id").notNull().references("id").inTable("users");
    table.integer("item_id").notNull().references("id").inTable("items");
    table.primary(["user_id", "item_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users_items");
  await knex.schema.dropTableIfExists("categories");
  await knex.schema.dropTableIfExists("items");
  await knex.schema.dropTableIfExists("users");
};
