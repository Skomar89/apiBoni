const aspectoComportamentalBP = require('./../models/AspectoComportamentalBP.model')

const reasolver = {
    Query: {
        aspectosComportamentalBP: () => aspectoComportamentalBP.query().where({ activo: "S" })
    }
}