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

    async updateBurger(column, value, id) {
        const db = new orm();
        await db.updateOne("burgers", column, value, id);
        await db.closeConnection();
    }

    async removeBurger(id) {
        const db = new orm();
        await db.removeOne("burgers", id);
        await db.closeConnection();
    }
}

module.exports = BurgerModel;