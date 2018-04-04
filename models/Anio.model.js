const { Model } = require('objection');
const path = require('path')


class Anio extends Model {
  static get tableName() {
    return 'anios';
  }

}

module.exports = Anio;