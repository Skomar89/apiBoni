const anio = require('./../models/Anio.model')


const resolver = {
    Query: {
        anios: () => anio.query().where('activo', 'S'),
    },
    Mutation: {
        anioCrear: (_, args) => {
            return anio.query().returning('anio_id').insert(args.anio).then(result => {
                return result;
            });
        },
        anioActualizar: (_, args) => {
            return anio.query().update(args.anio).where("anio_id", '=', args.id).andWhere('activo', 'S').then(() => {
                return anio.query().findOne('anio_id', '=', args.id);
            })
        },
        anioEliminar: (_, args) => {
            return anio.query().update(args.anio).where("anio_id", '=', args.id).andWhere('activo', 'S').then((result) => {
                if (result > 0) {
                    return anio.query().findOne('anio_id', '=', args.id);
                }
                throw new Error(`El año ya fue eliminado.`)

            })
        },
    }
}

module.exports = resolver