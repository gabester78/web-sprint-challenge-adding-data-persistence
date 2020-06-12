const db = require("../db-Config");

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResources,
  addTask,
  getTasks,
};

function getProjects() {
  return db("projects");
}

function addProject(data) {
  return db("projects").insert(data);
}

function getResources() {
  return db("resources");
}

function addResources(data) {
  return db("resources").insert(data);
}

function addTask(data) {
  return db("tasks").insert(data);
}

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select("*", "p.name as p_name", "p.description as p_description");
}

// function getShoppingList(data) {
//     // SELECT i.ingredient_name, ri.quantity
//     // FROM [recipe_info] as ri
//     //   JOIN ingredients as i
//     //   on i.id = ri.ingredient_id
//     //   JOIN recipes as r
//     //   on r.id = ri.recipe_id
//     //   WHERE r.id = 'id'
//     return db("recipe_info as ri")
//       .join("ingredients as i", "i.id", "ri.ingredient_id")
//       .join("recipes as r", "r.id", "ri.recipe_id")
//       .select("r.id as recipes", "i.ingredient_name", "ri.quantity")
//       .where("r.id", data);
//   }
