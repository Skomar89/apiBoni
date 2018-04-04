const curso = require('./../models/Curso.model')

const resolver = {
    Query: {
        cursos: () => curso.query().where('activo', 'S')
    },
    Mutation: {
        cursoCrear: (_, args) => {
            return curso.query().returning('curso_id').insert(args.curso)
        },
        cursoActualizar: (_, args) => {
            return curso.query().update(args.curso).where('curso_id', '=', args.id).andWhere('activo', 'S').then((result) => {
                if (result > 0) {
                    return curso.query().findOne('curso_id', '=', args.id)
                }
                throw new Error(`El curso ${args.curso.nombre} no se pudo actualizar verifique los datos.`);

            })
        },
        cursoEliminar: (_, args) => {
            return curso.query().update(args.curso).where('curso_id', '=', args.id).andWhere('activo', 'S').then((result) => {
                if (result > 0) {
                    return curso.query().findOne('curso_id', '=', args.id)
                }
                console.log(args.curso);
                throw new Error(`El curso ya fue eliminado.`);

            })
        }
    }
}

module.exports = resolver