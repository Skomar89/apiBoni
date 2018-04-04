module.exports = `

type curso{
    curso_id:ID!
    nombre:String!
    abreviatura:String!
    activo:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input nuevoCurso{
    nombre:String!
    abreviatura:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input editarCurso{
    nombre:String
    abreviatura:String
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input eliminarCurso{
    activo:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}




`