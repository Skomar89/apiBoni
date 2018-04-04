const aspectoFamiliar = require('./../models/AspectoFamiliar.model')

const resolver = {
    Query: {
        aspectoFamiliares: () => {
            aspectoFamiliar.query().where({ activo: 'S' })
        }
    }
}

module.resolver = resolver