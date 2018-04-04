
const inscripcion = require('./../models/Inscripcion.model')

const resolver = {

    Mutation: {

        uploadFile: (rootValue, args) => {
            switch (args.identificador) {
                case 'fotoEstudiante':
                    return inscripcion.query().where({ activo: "S", estudiante_id: args.estudianteId }).then((inscrip) => {
                        if (inscrip.length > 0) {
                            return inscripcion.query().update({ foto_estudiante_ba: rootValue.request.file.path }).where({ estudiante_id: args.estudianteId }).then((resultUpdate) => {
                                if (resultUpdate > 0) {
                                    return rootValue.request.file;
                                }
                            })
                        }
                        throw new Error(`El Aspirante no existe`)
                    })
                    break;
                case 'libretaBoletin':
                    return inscripcion.query().where({ activo: "S", estudiante_id: args.estudianteId }).then((inscrip) => {
                        if (inscrip.length > 0) {
                            return inscripcion.query().update({ fotocopia_libretaboletin: rootValue.request.file.path }).where({ estudiante_id: args.estudianteId }).then((resultUpdate) => {
                                if (resultUpdate > 0) {
                                    return rootValue.request.file;
                                }
                            })
                        }
                        throw new Error(`El Aspirante no existe`)
                    })
                    break;
                case 'docIdentidad':
                    return inscripcion.query().where({ activo: "S", estudiante_id: args.estudianteId }).then((inscrip) => {
                        if (inscrip.length > 0) {
                            return inscripcion.query().update({ fotocopia_docidentidad: rootValue.request.file.path }).where({ estudiante_id: args.estudianteId }).then((resultUpdate) => {
                                if (resultUpdate > 0) {
                                    return rootValue.request.file;
                                }
                            })
                        }
                        throw new Error(`El Aspirante no existe`)
                    })
                    break;
                case 'referencias':
                    return inscripcion.query().where({ activo: "S", estudiante_id: args.estudianteId }).then((inscrip) => {
                        if (inscrip.length > 0) {
                            return inscripcion.query().update({ fotocopia_referencias: rootValue.request.file.path }).where({ estudiante_id: args.estudianteId }).then((resultUpdate) => {
                                if (resultUpdate > 0) {
                                    return rootValue.request.file;
                                }
                            })
                        }
                        throw new Error(`El Aspirante no existe`)
                    })
                    break;

                default:
                    throw new Error(`Guardar el documento`)
                    break;
            }



        }
    }

}
module.exports = resolver