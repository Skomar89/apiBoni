const { Model } = require('objection');
const path = require('path')

class Formato extends Model {
    static get tableName() {
        return 'formatos'
    }
}

module.exports = Formato;