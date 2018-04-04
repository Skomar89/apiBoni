const departamento = require('./../models/Departamento.model')

const resolver = {
    Query: {
        departamentos: () => departamento.query().where('activo', 'S')
    }
}

module.exports = resolver