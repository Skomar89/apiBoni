const desarrolloInfancia = require('./../models/DesarrolloInfancia.models')

const resolver = {
    Query: {
        desarrollosinfancia: () => {
            return desarrolloInfancia.query().where({ activo: "S" })
        }
    }
}

module.exports = resolver