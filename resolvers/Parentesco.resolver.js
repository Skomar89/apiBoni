const parentesco = require('./../models/Parentesco.model')

const resolver = {
    Query: {
        parentescos: () => parentesco.query().where('activo', 'S')
    },
    Mutation: {
        parentescoCrear: (_, args) => {
            return parentesco.query().returning('parentesco_id').insert(args.parentesco)
        },
        parentescoActualizar: (_, args) => {
            return parentesco.query().update(args.parentesco).where('parentesco_id', '=', args.id).andWhere('activo', 'S').then(() => {
                return parentesco.query().findOne('parentesco_id', '=', args.id)
            })
        },
        parentescoEliminar: (_, args) => {
            return parentesco.query().update(args.parentesco).where('parentesco_id', '=', args.id).andWhere('activo', 'S').then((result) => {
                if (result > 0) {
                    return parentesco.query().findOne('parentesco_id', '=', args.id)
                }
                throw new Error(`El parentesco ya fue eliminado.`)

            })
        }
    }
}

module.exports = resolver