module.exports = `
type SolicitudAdmision{
    solicitud_admision_id:ID!
    usuario_id:Int!
    formato:Formato
    estado:Estado
    activo:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

enum Estado{
    Pendiente
    Entregado
} 

input nuevoSolicitudAdmision{
    usuario_id:Int!
    formato_id:Int!
    estado:String!
    activo:String
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

`