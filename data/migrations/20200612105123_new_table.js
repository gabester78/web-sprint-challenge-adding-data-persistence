exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("description", 255);
      tbl.boolean("completed").notNullable().defaultTo(0);
    })

    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable().unique();
      tbl.string("description", 255);
    })

    .createTable("project_resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .references("projects.id")
        .onDelete("RESTRICT") // RESTRICT, CASCADE, SET NULL, DO NOTHING
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .references("resources.id")
        .onDelete("RESTRICT") // RESTRICT, CASCADE, SET NULL, DO NOTHING
        .onUpdate("CASCADE");
    })

    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("description", 255).notNullable();
      tbl.string("notes", 255);
      tbl.boolean("completed").notNullable().defaultTo(0);
      tbl
        .integer("project_id")
        .unsigned()
        .references("projects.id")
        .onDelete("RESTRICT") // RESTRICT, CASCADE, SET NULL, DO NOTHING
        .onUpdate("CASCADE");
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
