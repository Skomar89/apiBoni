const grado = require('./../models/Grado.model')

const resolver = {
    Query: {
        grados: () => grado.query().where('activo', 'S')
    },
    Mutation: {
        gradoCrear: (_, args) => {
            return grado.query().returning('grado_id').insert(args.grado).then((result) => {
                return result;
            })
        },
        gradoActualizar: (_, args) => {
            return grado.query().update(args.grado).where('grado_id', '=', args.id).andWhere('activo', 'S').then(() => {
                return grado.query().findOne('grado_id', '=', args.id);
            })
        },
        gradoEliminar: (_, args) => {
            return grado.query().update(args.grado).where('grado_id', '=', args.id).andWhere('activo', 'S').then((result) => {
                if (result > 0) {
                    return grado.query().findOne('grado_id', '=', args.id);
                }
                throw new Error(`El grado ya fue eliminado.`)
            })
        },
    }
}

module.exports = resolver