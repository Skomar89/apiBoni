const { Model } = require('objection');
const path = require('path')


class AspectoFamiliar extends Model {
    static get tableName() {
        return 'aspectos_familiares';
    }

}

module.exports = AspectoFamiliar;