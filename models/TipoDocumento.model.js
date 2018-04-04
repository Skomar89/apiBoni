const { Model } = require('objection');

class TipoDocumento extends Model {
    static get tableName() {
        return 'tipo_documentos';
    }
}

module.exports = TipoDocumento;