const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/users-model");

const router = express.Router();

// Endpoint to retrieve list of Users.
router.get("/", async (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log("ERROR HERE");
      res.status(500).json(err);
    });
  //   try {
  //     res.json(await Users.find());
  //   } catch (err) {
  //     next(err);
  //   }
});
// Endpoint to READ a specific User.
router.get("/:id", async (req, res, next) => {
  try {
    res.json(await Users.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});
// Endpoint to READ a specific Users Items.
router.get("/:id/items", async (req, res, next) => {
  try {
    const items = await Users.findItems(req.params.id);
    res.json(items);
  } catch (err) {
    next(err);
  }
});
// Endpoint to CREATE Registering a new User.
router.post("/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await Users.findByUsername(username);

    if (user) {
      return res.status(409).json({
        message: "Username is already taken",
      });
    }

    const newUser = await Users.add({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});
// Endpoint for Logging In an existing User.
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findByUsername(username);

    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.json({
      message: `Welcome ${user.username}`,
    });
  } catch (err) {
    next(err);
  }
});
// Endpoint to UPDATE existing User.
router.put("/update/:id", (req, res) => {
  Users.update(req.params.id, req.body)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: "The user could not be found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error updating the user",
      });
    });
});
// Endpoint to DELETE a User
router.delete("/delete/:id", (req, res) => {
  Users.remove(req.params.id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({
          message: "The user has been deleted",
        });
      } else {
        res.status(404).json({
          message: "The user could not be found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error removing the user",
      });
    });
});

module.exports = router;
