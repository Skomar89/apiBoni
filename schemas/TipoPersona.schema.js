module.exports = `

type tipoPersona{
    tipo_persona_id:String!
    descripcion:String!
    activo:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input nuevoTipoPersona{
    descripcion:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input editarTipoPersona{
    descripcion:String
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input eliminarTipoPersona{
    activo:String!
    actualizado_por:Int!
    fecha_actualizacion:String! 
}



`