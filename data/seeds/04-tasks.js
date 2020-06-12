exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    { description: "Practice what was learned.", project_id: 1 },
    { description: "Continue studing in spare time.", project_id: 1 },
    { description: "Find coupons.", project_id: 2 },
  ]);
};
