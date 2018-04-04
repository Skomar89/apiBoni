const { Model } = require('objection');
const path = require('path')


class DesarrolloInfancia extends Model {
    static get tableName() {
        return 'desarrollos_infancia';
    }

}

module.exports = DesarrolloInfancia;