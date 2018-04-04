const datosResponsable = require('./../models/DatosResponsable.model')

const resolver = {
    Query: {
        datosResponsables: () => datosResponsable.query()
    }

}

module.exports = resolver