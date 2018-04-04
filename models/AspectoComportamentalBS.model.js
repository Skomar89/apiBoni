const { Model } = require('objection');
const path = require('path')


class AspectoComportamentalBS extends Model {
  static get tableName() {
    return 'aspectos_comportamental_bs';
  }

}

module.exports = AspectoComportamentalBS;