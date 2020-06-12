const express = require("express");

const db = require("./projects_model.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.getProjects()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't get the recipes." });
    });
});

// router.get("/:id/shoppingList", (req, res) => {
//   db.getShoppingList(req.params.id)
//     .then((data) => {
//       if (data) {
//         res.json(data);
//       } else {
//         res
//           .status(404)
//           .json({ message: "Can't get the ingredients with this id." });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Can't get the ingredients." });
//     });
// });

module.exports = router;
