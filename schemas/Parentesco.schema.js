module.exports = `

type Parentesco{
    parentesco_id:ID!
    nombre:String!
    activo:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input nuevoParentesco{
    nombre:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!    
}

input editarParentesco{
    nombre:String
    actualizado_por:Int!
    fecha_actualizacion:String!    
}

input eliminarParentesco{
    activo:String!
    actualizado_por:Int!
    fecha_actualizacion:String!  
}

`