module.exports = `

type Formato{
    formato_id:ID!
    nombre:String!
    codigo:String!
    version:String!
    activo:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input nuevoFormato{
    nombre:String!
    codigo:String!
    version:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input editarFormato{
    nombre:String
    codigo:String
    version:String
    actualizado_por:Int!
    fecha_actualizacion:String! 
}

input eliminarFormato{
    activo:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}



`