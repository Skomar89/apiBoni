module.exports = `

type Persona{
    persona_id:ID!
    usuario:Int
    tipopersona:String
    nombres:String!
    apellidos:String!
    tipodocumento:String!
    numerodocumento:Int!
    correoelectronico:String!
    telefonofijo:Int
    telefonomovil:Int
    departamenonacimiento:String
    ciudadnacimiento:String
    fechanacimiento:String
    departamentoexpedicion:String
    ciudadexpedicion:String
    direccionresidencia:String
    direccioncorrespondencia:String
    departamentocorrespondencia:String
    ciudadcorrespondencia:String
    profesion:String
    solicitud_admision_id:Int
    datosResponsables:DatosResponsable
    responsableAlumnos:ResponsableAlumno
    aspectoFamiliar:AspectoFamiliar
    desarrolloInfancia:DesarrolloInfancia
    aspectoComportamentalBP:AspectoComportamentalBP
    inscripcion:Inscripcion
    aspectoComportamentalBS:AspectoComportamentalBS
}

input nuevoPersona{
    usuario:Int
    tipopersona:String!
    nombres:String!
    apellidos:String!
    tipodocumento:Int!
    numerodocumento:String!
    correoelectronico:String!
    telefonofijo:String
    telefonomovil:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
}

input editarPersona{
    tipopersona:String
    nombres:String
    apellidos:String
    tipodocumento:Int
    numerodocumento:String
    correoelectronico:String
    telefonofijo:String
    telefonomovil:String
    actualizado_por:Int!
    fecha_actualizacion:String!
}

`