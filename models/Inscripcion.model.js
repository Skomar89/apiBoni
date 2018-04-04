const { Model } = require('objection');
const path = require('path')


class Inscripcion extends Model {
    static get tableName() {
        return 'inscripciones';
    }

}

module.exports = Inscripcion;