const { Model } = require('objection');
const path = require('path')

class Parentesco extends Model {
    static get tableName() {
        return 'parentescos'
    }
}

module.exports = Parentesco;