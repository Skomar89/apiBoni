const { Model } = require('objection');
const path = require('path')

class ResponsableAlumno extends Model {
    static get tableName() {
        return 'responsables_alumnos'
    }

    static get relationMappings() {
        return {
            personas: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/Persona.model'),
                join: {
                    from: 'personas.persona_id',
                    to: 'responsables_alumnos.responsable_id'
                }
            },
            personasEstudiante: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/Persona.model'),
                join: {
                    from: 'personas.persona_id',
                    to: 'responsables_alumnos.estudiante_id'
                }
            },
            parentescos: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/Parentesco.model'),
                join: {
                    from: 'parentescos.parentesco_id',
                    to: 'responsables_alumnos.parentesco_id'
                }
            }
        }
    }
}

module.exports = ResponsableAlumno;