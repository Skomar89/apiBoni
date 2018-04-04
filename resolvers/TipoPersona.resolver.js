const tipoPersona = require('./../models/TipoPersona.model')

const resolver = {
    Query: {
        tipoPersonas: () => tipoPersona.query().where('activo', 'S')
    },
    Mutation: {
        tipoPersonaCrear: (_, args) => {
            return tipoPersona.query().returning('tipo_persona_id').insert(args.tipoPersona)
        },
        tipoPersonaActualizar: (_, args) => {
            return tipoPersona.query().update(args.tipoPersona).where('tipo_persona_id', '=', args.id).andWhere('activo', 'S').then(() => {
                return tipoPersona.query().findOne('tipo_persona_id', '=', args.id)
            })
        },
        tipoPersonaEliminar: (_, args) => {
            return tipoPersona.query().update(args.tipoPersona).where('tipo_persona_id', '=', args.id).andWhere('activo', 'S').then(() => {
                return tipoPersona.query().findOne('tipo_persona_id', '=', args.id)
            })
        }
    }
}

module.export = resolver