module.exports = `

    type grado{
        grado_id:ID!
        nombre:String!
        abreviatura:String!
        cupo_maximo:Int!
        activo:String!
        creado_por:Int!
        fecha_creacion:String!
        actualizado_por:Int!
        fecha_actualizacion:String!
    }

    input nuevoGrado{
        nombre:String!
        abreviatura:String!
        cupo_maximo:Int!
        creado_por:Int!
        fecha_creacion:String!
        actualizado_por:Int!
        fecha_actualizacion:String!
    }

    input editarGrado{
        nombre:String
        abreviatura:String
        cupo_maximo:Int
        actualizado_por:Int!
        fecha_actualizacion:String!
    }

    input eliminarGrado{
        activo:String!
        actualizado_por:Int!
        fecha_actualizacion:String!
    }



`