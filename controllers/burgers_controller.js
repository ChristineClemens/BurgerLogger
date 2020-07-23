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
    await BurgerModel.updateBurger(req.body.burger_id);
    res.status(200).send("Burger changed successfully!");
});

router.get("/", async function(req, res) {
    console.log("I'ma get dem burgers...");
    let allBurgers = await BurgerModel.getBurgers();
    res.render("index", {
        burgers: allBurgers
    })
});

router.delete("/api/burgers", async function(req, res) {
    await BurgerModel.removeBurger(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;