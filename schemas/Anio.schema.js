module.exports = `

type anio{
    anio_id:ID!
    anio:String!
    activo:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
} 

input nuevoAnio{
    anio:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input editarAnio{
    anio:String
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input eliminarAnio{
    activo:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

`