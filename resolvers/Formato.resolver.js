const formato = require('./../models/Formato.model')

const resolver = {
    Query: {
        formatos: () => formato.query().where('activo', 'S')
    },
    Mutation: {
        formatoCrear: (_, args) => {
            return formato.query().returning('formato_id').insert(args.formato);
        },
        formatoActualizar: (_, args) => {
            return formato.query().update(args.formato).where('formato_id', '=', args.id).andWhere('activo', 'S').then(() => {
                return formato.query().findOne('formato_id', '=', args.id);
            })
        },
        formatoEliminar: (_, args) => {
            return formato.query().update(args.formato).where('formato_id', '=', args.id).andWhere('activo', 'S').then(() => {
                return formato.query().findOne('formato_id', '=', args.id);
            })
        }
    }
}

module.exports = resolver