const { Model } = require('objection');
const path = require('path')

class Persona extends Model {
    static get tableName() {
        return 'personas'
    }

    static get relationMappings() {
        return {
            datosResponsables: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/DatosResponsable.model'),
                join: {
                    from: 'datos_responsables.responsable_id',
                    to: 'personas.persona_id'
                }
            },
            responsableAlumnos: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/ResponsableAlumno.model'),
                join: {
                    from: 'responsables_alumnos.responsable_id',
                    to: 'personas.persona_id'
                }
            },
            aspectoFamiliar: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/AspectoFamiliar.model'),
                join: {
                    from: 'aspectos_familiares.estudiante_id',
                    to: 'personas.persona_id'
                }
            },
            desarrolloInfancia: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/DesarrolloInfancia.models'),
                join: {
                    from: 'desarrollos_infancia.estudiante_id',
                    to: 'personas.persona_id'
                }
            },
            aspectoComportamentalBP: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/AspectoComportamentalBP.model'),
                join: {
                    from: 'aspectos_comportamental_bp.estudiante_id',
                    to: 'personas.persona_id'
                }
            },
            inscripcion: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/Inscripcion.model'),
                join: {
                    from: 'inscripciones.estudiante_id',
                    to: 'personas.persona_id'
                }
            },
            aspectoComportamentalBS: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, '/AspectoComportamentalBS.model'),
                join: {
                    from: 'aspectos_comportamental_bs.estudiante_id',
                    to: 'personas.persona_id'
                }
            }
        }
    }
}

module.exports = Persona;