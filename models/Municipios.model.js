const { Model } = require('objection');
const path = require('path')

class Municipio extends Model {
    static get tableName() {
        return 'municipios'
    }

}

module.exports = Municipio;