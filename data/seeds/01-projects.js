exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    { name: "Learn BE.", description: "Study BE stuff." },
    { name: "Buy food.", description: "Go shopping at the market." },
  ]);
};
