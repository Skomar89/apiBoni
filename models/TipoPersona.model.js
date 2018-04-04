const { Model } = require('objection');
const path = require('path')

class TipoPersona extends Model {
    static get tableName() {
        return 'tipo_personas'
    }
}

module.exports = TipoPersona;