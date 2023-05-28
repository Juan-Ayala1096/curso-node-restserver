const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuriosPath = '/api/usuarios';

        //Middlewares, funciones que añaden otra funcionalidad al web server, la funcion se ejecuta cuando levantamos nuestro servidor
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        //Cors
        this.app.use( cors() );

        //Lectura y parseo del Body+
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use( this.usuriosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });

    }

}






module.exports = Server;