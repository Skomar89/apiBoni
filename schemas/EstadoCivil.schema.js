module.exports = `
type estadoCivil{
    estado_civil_id:ID!
    nombre:String!
    activo:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input nuevoEstadoCivil{
    nombre:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!

}

input editarEstadoCivil{
    nombre:String
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input eliminarEstadoCivil{
    activo:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}



`