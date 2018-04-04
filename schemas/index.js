const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')



/**Resolvers */
const anioResolver = require('./../resolvers/Anio.resolver')
const tipoDocumentoResolver = require('./../resolvers/TipoDocumento.resolver')
const gradoResolver = require('./../resolvers/Grado.resolver')
const formatoResolver = require('./../resolvers/Formato.resolver')
const cursoResolver = require('./../resolvers/Curso.resolver')
const estadoCivilResolver = require('./../resolvers/EstadoCivil.resolver')
const tipoPersonaResolver = require('./../resolvers/TipoPersona.resolver')
const parentescoResolver = require('./../resolvers/Parentesco.resolver')
const solicitudAdmisionResolver = require('./../resolvers/SolicitudAdmision.resolver')
const personaResolver = require('./../resolvers/Persona.resolver')
const departamentoResolver = require('./../resolvers/Departamento.resolver')
const municipioResolver = require('./../resolvers/Municipio.resolver')
const datosResponsablesResolver = require('./../resolvers/DatosResponsable.resolver')
const responsableAlumnoResolver = require('./../resolvers/ResponsableAlumno.resolver')
const aspectoFamiliarResolver = require('./../resolvers/AspectoFamiliar.resolver')
const desarrolloinfanciaResolver = require('./../resolvers/DesarrolloInfancia.resolver')
const aspectoComportamentalBPResolver = require('./../resolvers/AspectoComportamentalBP.resolver')
const inscripcionResolver = require('./../resolvers/Inscripcion.resolver')
const aspectoComportamentalBSResolver = require('./../resolvers/AspectoComportamentalBS.resolver')
const uploadResolver = require('./../resolvers/Upload.resolver')

/** Schemas */
const anioSchema = require('./Anio.schema')
const tipoDocumentoSchema = require('./TipoDocumento.schema')
const gradoSchema = require('./Grado.schema')
const formatoSchema = require('./Formato.schema')
const cursoSchema = require('./Curso.schema')
const estadoCivilSchema = require('./EstadoCivil.schema')
const tipoPersonaSchema = require('./TipoPersona.schema')
const parentescoSchema = require('./Parentesco.schema')
const solicitudAdmisionSchema = require('./SolicitudAdmision.shema')
const personaSchema = require('./Persona.shema')
const departamentoSchema = require('./Departamento.schema')
const municipioSchema = require('./Municipio.schema')
const datosResponsableSchema = require('./DatosResponsable.schema')
const responsableAlumnoSchema = require('./ResponsableAlumno.schema')
const aspectoFamiliarSchema = require('./AspectoFamiliar.schema')
const desarrolloinfanciaSchema = require('./DesarrolloInfancia.schema')
const aspectoComportamentalBPSchema = require('./AspectoComportamentalBP.Schema')
const inscripcionSchema = require('./../schemas/Inscripcion.schema')
const aspectoComportamentalBSSchema = require('./../schemas/AspectoComportamentalBS.schema')
const uploadSchema = require('./../schemas/Upload.schema')


const rootQuery = `

type Query{
    #Lista de Años
    anios:[anio]
    #Tipos de documentos
    tipoDocumentos:[tipoDocumento]
    #Listado de Grados
    grados:[grado]
    #Formatos a diligenciar Padres
    formatos:[Formato]
    #Listado de Cursos
    cursos:[curso]
    #Listado estado civiles
    estadoCiviles:[estadoCivil]
    #Listado Tipos de personas roles
    tipoPersonas:[tipoPersona] 
    #Lista de parentesco
    parentescos:[Parentesco]   


    solicitudAdmisiones:[SolicitudAdmision]
    SolicitudAdmisionUsuario(id:Int!):[SolicitudAdmision]

    personasTipoDocumento(tipoDocumento:Int!):[Persona]
    personasTipoNumero(tipoDocumento:Int!,numeroDocumento:Int!):[Persona]
    personasInformeSolicitud(solicitud:Int):[Persona]


    departamentos:[Departamento]
    municipios(departamentoId:String!):[Municipio]
    #Listar Datos responsables
    datosResponsables:[DatosResponsable]
    #Listar Responsables alumnos
    responsableAlumnos:[ResponsableAlumno]
    #Listar Aspecto familiares
    aspectoFamiliares:[AspectoFamiliar]
    #Listar desarrollos de inafacia
    desarrollosinfancia:[DesarrolloInfancia]
    #Listar Aspectos Comportamental basica primaria
    aspectosComportamentalBP:[AspectoComportamentalBP]

    #Listar Inscripciopnes
    inscripciones:[Inscripcion]
    
    #Listar aspectes comportamentales basica secundaria
    aspectosComportamentalBS:[AspectoComportamentalBS]

    hello: String
}

type Mutation{

    anioCrear(anio:nuevoAnio!):anio
    anioActualizar(id:Int!,anio:editarAnio!):anio
    anioEliminar(id:Int!,anio:eliminarAnio!):anio

    tipoDocumentoCrear(tipo:nuevoTipoDocumento!):tipoDocumento
    tipoDocumentoActualizar(id:Int!,tipo:editarTipoDucuemnto!):tipoDocumento
    tipoDocumentoEliminar(id:Int!,tipo:eliminarTipoDocumento!):tipoDocumento

    gradoCrear(grado:nuevoGrado!):grado
    gradoActualizar(id:Int!,grado:editarGrado):grado
    gradoEliminar(id:Int!,grado:eliminarGrado):grado

    formatoCrear(formato:nuevoFormato!):Formato
    formatoActualizar(id:Int!,formato:editarFormato!):Formato
    formatoEliminar(id:Int!,formato:eliminarFormato!):Formato

    cursoCrear(curso:nuevoCurso!):curso
    cursoActualizar(id:Int!,curso:editarCurso!):curso
    cursoEliminar(id:Int!,curso:eliminarCurso!):curso

    estadoCivilCrear(estadoCivil:nuevoEstadoCivil!):estadoCivil
    estadoCivilActualizar(id:Int!,estadoCivil:editarEstadoCivil!):estadoCivil
    estadoCivilEliminar(id:Int!,estadoCivil:eliminarEstadoCivil!):estadoCivil

    tipoPersonaCrear(tipoPersona:nuevoTipoPersona!):tipoPersona
    tipoPersonaActualizar(id:Int!,tipoPersona:editarTipoPersona!):tipoPersona
    tipoPersonaEliminar(id:Int!,tipoPersona:eliminarTipoPersona!):tipoPersona

    parentescoCrear(parentesco:nuevoParentesco!):Parentesco
    parentescoActualizar(id:Int!,parentesco:editarParentesco!):Parentesco
    parentescoEliminar(id:Int!,parentesco:eliminarParentesco!):Parentesco

    solicitudAdmisionCrear(solicitudAdmision:nuevoSolicitudAdmision!):SolicitudAdmision

    personaCrearInicial(persona:nuevoPersona!):Persona
    personaActualizarInicial(id:Int!,persona:editarPersona!):Persona
    
    uploadFile(estudianteId:Int!,identificador:String!):Upload!
}

`


const schema = makeExecutableSchema({
    typeDefs: [rootQuery, anioSchema, tipoDocumentoSchema, gradoSchema, formatoSchema, cursoSchema, estadoCivilSchema, tipoPersonaSchema, parentescoSchema, solicitudAdmisionSchema, personaSchema, departamentoSchema, municipioSchema, datosResponsableSchema, responsableAlumnoSchema, aspectoFamiliarSchema, desarrolloinfanciaSchema, aspectoComportamentalBPSchema, inscripcionSchema, aspectoComportamentalBSSchema, uploadSchema],
    resolvers: [anioResolver, tipoDocumentoResolver, gradoResolver, formatoResolver, cursoResolver, estadoCivilResolver, tipoDocumentoResolver, parentescoResolver, solicitudAdmisionResolver, personaResolver, departamentoResolver, municipioResolver, datosResponsablesResolver, responsableAlumnoResolver, aspectoFamiliarResolver, desarrolloinfanciaResolver, aspectoComportamentalBPResolver, aspectoComportamentalBSResolver, uploadResolver]
})

module.exports = schema