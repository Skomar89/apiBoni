module.exports = `

type tipoDocumento{
    tipo_documento_id:ID!
    nombre:String!
    abreviatura:String!
    activo:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input nuevoTipoDocumento{
    nombre:String!
    abreviatura:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input editarTipoDucuemnto{
    nombre:String
    abreviatura:String
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input eliminarTipoDocumento{
    activo:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}



`