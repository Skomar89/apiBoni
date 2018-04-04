const inscripcion = require('./../models/Inscripcion.model')

const resolver = {
    Query: {
        inscripciones: () => inscripcion.query().where({ activo: "S" })
    }
}

module.exports = resolver