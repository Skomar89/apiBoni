const { Model } = require('objection');
const path = require('path')


class DatosResponsable extends Model {
    static get tableName() {
        return 'datos_responsables';
    }

    static get relationMappings() {
        return {
            personas: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/Persona.model'),
                join: {
                    from: 'datos_responsables.responsable_id',
                    to: 'personas.persona_id'
                }
            }
        }
    }

}

module.exports = DatosResponsable