module.exports = `
type ResponsableAlumno{
    responsable_alumno_id:ID!
    responsable_id:Int!
    estudiante_id:Int!
    parentesco_id:Int!
    activo:String!
    creado_por:Int!
    fecha_creacion:String!
    actualizado_por:Int!
    fecha_actualizacion:String!
    personasEstudiante:Persona
    personas:Persona,
    parentescos:Parentesco


}

`