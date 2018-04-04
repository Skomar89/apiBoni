const aspectoComportamentalBS = require('./../models/AspectoComportamentalBS.model')


const resolver = {
    Query: {
        aspectosComportamentalBS: () => aspectoComportamentalBS.query().where({ activo: "S" })
    }
}

module.exports = resolver