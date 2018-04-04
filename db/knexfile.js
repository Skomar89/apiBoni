module.exports = {

    development: {
        client: 'pg',
        version: '7.4',
        connection: {
            host: 'localhost',
            user: 'sanbonifacio',
            password: '123456',
            database: 'sanbonifacio'
        },
        useNullAsDefault: true
    },

    production: {
        // Acá irían los datos para la conexión
        // en un ambiente de producción
    }

}