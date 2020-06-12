const db = require("../db-Config");

module.exports = {
  getProjects,
  //   addProject,
  //   getResources,
  //   addResource,
  //   getTasks,
  //   addTask,
  //   findProject,
  //   updateProject,
  //   removeProject,
};

function getProjects() {
  return db("projects");
}
