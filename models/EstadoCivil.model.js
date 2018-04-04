const { Model } = require('objection');
const path = require('path')

class EstadoCivil extends Model {
    static get tableName() {
        return 'estado_civil'
    }
}

module.exports = EstadoCivil;