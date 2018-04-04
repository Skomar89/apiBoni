const { Model } = require('objection');
const path = require('path')

class Departamento extends Model {
    static get tableName() {
        return 'departamentos'
    }

}

module.exports = Departamento;