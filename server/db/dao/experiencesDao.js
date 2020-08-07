const messages = require('../../constants/messages');
const Experience = require('../models/experiences');

class ProductsDao {

    static async getExperiences() {
        try { return await Experience.find() }
        catch (e) { return messages.ERROR }
    }

    /*static async getOneProduct(id) {
        try {
            return await products.findOne({
                where: { id: id }
            })
        }
        catch (e) { return messages.ERROR }
    }*/

    static async setExperience(body) {
        const experience = new Experience(body);
        try { return await experience.save() }
        catch (e) { 
            console.log("error en dao: " + e)
            return messages.ERROR }
    }

    /*static async updateProduct(body, id) {
        try {
            return await products.update(body, {
                where: { id: id }
            })
        }
        catch (e) { return messages.ERROR }
    }

    static async deleteProduct(id) {
        try {
            return await products.destroy({
                where: { id: id }
            })
        }
        catch (e) { return messages.ERROR }
    }*/
}

module.exports = ProductsDao;