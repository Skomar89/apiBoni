const { Model } = require('objection');

class Grado extends Model {
    static get tableName() {
        return 'grados';
    }
}

module.exports = Grado;