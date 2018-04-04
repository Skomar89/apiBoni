const express = require('express')
const bodyParse = require('body-parser')
const { apolloUploadExpress } = require('apollo-upload-server')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schemas')
const cors = require('cors')

require('./db/setup')

const multer = require('multer')
const graphqlHTTP = require('express-graphql')




const app = new express()

// Configure multer to use the /uploads folder for new files
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    // Use "[original file name]-[timestamp]" for file names in uploaded directory
    filename: function (req, file, cb) {
        //console.log(file);
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({
    storage: storage
})

app.use(upload.single('fotoEstudiante'));


app.use(
    '/api',
    cors(),
    bodyParse.json(),
    graphqlHTTP(req => {
        return {
            schema,
            formatError: (error) => {
                return {
                    mensaje: error.message
                }
            },
            rootValue: {
                request: req
            },
            graphiql: false
        };
    }));



app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/api'
    })
)


const PORT = 5678

app.listen(PORT, () => {
    console.log('Servidor Ok');
})