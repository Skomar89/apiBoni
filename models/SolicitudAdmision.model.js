const { Model } = require('objection');
const path = require('path')

class Parentesco extends Model {
    static get tableName() {
        return 'solicitud_admisiones'
    }
    static get relationMappings() {
        return {
            formato: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/Formato.model'),
                join: {
                    from: 'solicitud_admisiones.formato_id',
                    to: 'formatos.formato_id'
                }
            }
        }
    }
}

module.exports = Parentesco;