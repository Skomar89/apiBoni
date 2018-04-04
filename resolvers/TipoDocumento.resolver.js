const tipoDocumento = require('./../models/TipoDocumento.model')


const resolver = {
    Query: {
        tipoDocumentos: () => tipoDocumento.query().where('activo', 'S')
    },
    Mutation: {
        tipoDocumentoCrear: (_, args) => {
            return tipoDocumento.query().returning('tipo_documento_id').insert(args.tipo).then((result) => {
                return result;
            })
        },
        tipoDocumentoActualizar: (_, args) => {
            return tipoDocumento.query().update(args.tipo).where('tipo_documento_id', '=', args.id).andWhere('activo', 'S').then(() => {
                return tipoDocumento.query().findOne('tipo_documento_id', '=', args.id);
            })
        },
        tipoDocumentoEliminar: (_, args) => {
            return tipoDocumento.query().update(args.tipo).where('tipo_documento_id', '=', args.id).andWhere('activo', 'S').then((result) => {
                if (result > 0) {
                    return tipoDocumento.query().findOne('tipo_documento_id', '=', args.id);

                }
                throw new Error(`El tipo de documento ya fue eliminado.`)

            })
        }
    }
}

module.exports = resolver