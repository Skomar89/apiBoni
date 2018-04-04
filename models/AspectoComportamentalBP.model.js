const { Model } = require('objection');
const path = require('path')


class AspectoComportamentalBP extends Model {
  static get tableName() {
    return 'aspectos_comportamental_bp';
  }

}

module.exports = AspectoComportamentalBP;