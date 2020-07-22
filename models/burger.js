const orm = require("../config/orm");

class BurgerModel {
    async addBurger(burger) {
        const db = new orm();
        await db.insertOne("burgers", burger);
        await db.close();
    }

    async updateBurger(burger, condition) {
        const db = new orm();
        await db.updateOne("burgers", burger, condition);
        await db.close();
    }

    async removeBurger(condition) {
        const db = new orm();
        await db.removeOne("burgers", condition);
        await db.close();
    }
}

module.exports = BurgerModel;