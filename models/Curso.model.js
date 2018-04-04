const { Model } = require('objection');
const path = require('path')

class Curso extends Model {
    static get tableName() {
        return 'cursos'
    }
}

module.exports = Curso;