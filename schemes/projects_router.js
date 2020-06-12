const express = require("express");

const db = require("./projects_model.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.getProjects()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't get the projects." });
    });
});

router.post("/", (req, res) => {
  db.addProject(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't post the project." });
    });
});

router.get("/resources", (req, res) => {
  db.getResources()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't get the resources." });
    });
});

router.post("/resources", (req, res) => {
  db.addResources(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't post the resource." });
    });
});

router.get("/tasks", (req, res) => {
  db.getTasks()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't get the tasks." });
    });
});

router.post("/tasks", (req, res) => {
  db.addTask(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't post the task." });
    });
});

// router.get("/:id/shoppingList", (req, res) => {
//   db.getShoppingList(req.params.id)
//     .then((data) => {
//       if (data) {
//         res.json(data);
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Can't get the ingredients." });
//     });
// });

module.exports = router;
