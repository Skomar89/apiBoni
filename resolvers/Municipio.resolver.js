const municipio = require('./../models/Municipios.model')

const resolver = {
    Query: {
        municipios: (rootValue, args) => {
            return municipio.query().where({ activo: 'S', departamento_id: args.departamentoId })
        }
    }
}

module.exports = resolver