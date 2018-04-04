const responsableAlumno = require('./../models/ResponsableAlumno.model')

const resolver = {
    Query: {
        responsableAlumnos: () => responsableAlumno.query().eager('parentescos').where('activo', 'S').then((result) => {
            console.log(result);

            return result;
        })
    }
}

module.exports = resolver