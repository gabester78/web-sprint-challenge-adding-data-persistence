exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    { project_id: 1, recipe_step: 1, instructions: "Coat chicken with eggs." },
    { recipe_id: 1, recipe_step: 2, instructions: "Coat chicken with flour." },
    { recipe_id: 1, recipe_step: 3, instructions: "Fry chicken." },
    { recipe_id: 2, recipe_step: 1, instructions: "Cook bacon." },
    {
      recipe_id: 2,
      recipe_step: 2,
      instructions: "Chop bacon into small pieces.",
    },
    {
      recipe_id: 2,
      recipe_step: 3,
      instructions: "Fold bacon into eggs and cook.",
    },
  ]);
};
