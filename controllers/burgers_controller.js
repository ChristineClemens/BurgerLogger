const express = require("express");
const router = express.Router();

const Burger = require("../models/burger");
const BurgerModel = new Burger;

require("dotenv").config();

//Add a burger.
router.post("/burgers", async function(req, res) {
    console.log("I'm adding a burger!");
    await BurgerModel.addBurger(req.body);
    res.status(200).send("Burger ADDED!");
});

router.put("/burgers", async function(req, res) {
    console.log("I'm changing a burger!");
    await BurgerModel.updateBurger(req.body, )
});
