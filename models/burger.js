const orm = require("../config/orm");

class BurgerModel {
    async getBurgers() {
        const db = new orm();
        let allBurgers = await db.selectAll("burgers");
        await db.closeConnection();
        return allBurgers;
    }
    
    async addBurger(burger) {
        const db = new orm();
        await db.insertOne("burgers", burger);
        await db.closeConnection();
    }

    async updateBurger(burger, condition) {
        const db = new orm();
        console.log(burger);
        console.log(condition);
        await db.updateOne("burgers", burger, condition);
        await db.closeConnection();
    }

    async removeBurger(condition) {
        const db = new orm();
        await db.removeOne("burgers", condition);
        await db.closeConnection();
    }
}

module.exports = BurgerModel;