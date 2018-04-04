const persona = require('./../models/Persona.model')


const resolver = {
    Query: {
        personasTipoDocumento: (rootValue, args) => {
            return persona.query().where('tipodocumento', args.tipoDocumento).andWhere('activo', 'S').then((result) => {
                return result;
            })
        },
        personasTipoNumero: (rootValue, args) => {
            return persona.query().eager('[datosResponsables,aspectoFamiliar,desarrolloInfancia,aspectoComportamentalBP,inscripcion,aspectoComportamentalBS]').where('tipodocumento', args.tipoDocumento).andWhere('numerodocumento', '=', args.numeroDocumento).andWhere('activo', 'S').then((result) => {
                console.log(result);
                return result;
            })
        },
        personasInformeSolicitud: (rootValue, args) => {
            return persona.query().eager('[responsableAlumnos,responsableAlumnos.parentescos]').leftJoinRelation('[responsableAlumnos,responsableAlumnos.parentescos]').where('solicitud_admision_id', '=', args.solicitud).andWhere('personas.activo', 'S').orderBy(['tipopersona', 'nombre']).groupBy(['persona_id', 'nombre']).then((result) => {
                //console.log(result);

                return result;
            })
        }
    },
    Mutation: {
        personaCrearInicial: (_, args) => {
            return persona.query().returning('persona_id').insert(args.persona).then((result) => {
                return result;
            })
        },
        personaActualizarInicial: (_, args) => {
            return persona.query().update(args.persona).where('persona_id', '=', args.id).andWhere('activo', 'S').then(() => {
                return persona.query().findOne('persona_id', '=', args.id);
            })
        }
    }
}

module.exports = resolver