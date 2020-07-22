const orm = require("../config/orm");

class BurgerModel {
    async addBurger(tableName, value) {
        const db = new orm();
        await db.insertOne(tableName, value);
        await db.close();
    }

    async updateBurger(tableName, update, condition) {
        const db = new orm();
        await db.updateOne(tableName, update, condition);
        await db.close();
    }

    async removeBurger(tableName, condition) {
        const db = new orm();
        await db.removeOne(tableName, condition);
        await db.close();
    }
}