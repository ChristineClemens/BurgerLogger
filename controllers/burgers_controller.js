const express = require("express");
const router = express.Router();

const Burger = require("../models/burger");
const BurgerModel = new Burger;

require("dotenv").config();

//Add a burger.
router.post("/api/burgers", async function(req, res) {
    console.log("I'm adding a burger!");
    await BurgerModel.addBurger(req.body);
    res.status(200).send("Burger ADDED!");
});

router.put("/api/burgers/:id", async function(req, res) {
    console.log("I'm changing a burger!");
    var id = `${req.params.id}`;
    var value = req.body.devoured;
    var column = "devoured";
    console.log(req.body);
    await BurgerModel.updateBurger(column, value, id);
    res.status(200).send("Burger changed successfully!");
});

router.get("/", async function(req, res) {
    console.log("I'ma get dem burgers...");
    let allBurgers = await BurgerModel.getBurgers();
    res.render("index", {
        burgers: allBurgers
    })
});

router.delete("/api/burgers/:id", async function(req, res) {
  console.log("I'm deleting a burger!");
    id = `${req.params.id}`;
    await BurgerModel.removeBurger(id);
    res.status(200).send("Burger deleted successfully!");
  });

module.exports = router;