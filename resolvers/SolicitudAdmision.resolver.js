const solicitudAdmision = require('./../models/SolicitudAdmision.model')

const resolver = {
    Query: {
        solicitudAdmisiones: () => {
            return solicitudAdmision.query().eager('formato').where('activo', '=', 'S').then((result) => {
                return result;
            })
        },
        SolicitudAdmisionUsuario: (rootValue, args) => {
            return solicitudAdmision.query().eager('formato').where('usuario_id', '=', args.id).andWhere('activo', 'S')
        }
    },
    Mutation: {
        solicitudAdmisionCrear: (_, args) => {
            return solicitudAdmision.query().returning('solicitud_admision_id').insert(args.solicitudAdmision);
        }
    }
}

module.exports = resolver