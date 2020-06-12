exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    { name: "Lambda", description: "Online school." },
    { name: "Codecademy", description: "Online classes." },
    { name: "Store", description: "Grocery Store." },
    { name: "Farmer's Market", description: "Street fair." },
  ]);
};
