const estadoCivil = require('./../models/EstadoCivil.model')

const resolver = {
    Query: {
        estadoCiviles: () => estadoCivil.query().where('activo', 'S')
    },
    Mutation: {
        estadoCivilCrear: (_, args) => {
            return estadoCivil.query().returning('estado_civil_id').insert(args.estadoCivil)
        },
        estadoCivilActualizar: (_, args) => {
            return estadoCivil.query().update(args.estadoCivil).where('estado_civil_id', '=', args.id).andWhere('activo', 'S').then(() => {
                return estadoCivil.query().findOne('estado_civil_id', '=', args.id)
            })
        },
        estadoCivilEliminar: (_, args) => {
            return estadoCivil.query().update(args.estadoCivil).where('estado_civil_id', '=', args.id).andWhere('activo', 'S').then((result) => {
                if (result > 0) {
                    return estadoCivil.query().findOne('estado_civil_id', '=', args.id)
                }
                throw new Error('El Estado Civil ya fue eliminado');

            })
        }
    }
}

module.exports = resolver