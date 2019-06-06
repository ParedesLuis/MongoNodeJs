const hapi = require('hapi')
const routes = require('./routes')
const inert = require('inert')
const path =  require('path')
const handlerbars = require('handlebars')
const vision = require('vision')
const DataBase = require('./Db/db')
const server = hapi.server({//configurando el servidor
    port: process.env.PORT || 3000,
    host: 'localhost',
    routes:{
        files:{
          relativeTo: path.join(__dirname,'public')
        }
    }
  })

async function init(){
    const db = new DataBase
    


    try {
        await server.register(inert)//para abrir archivos!
        await server.register(vision)//para abrir las vistas!
        
        server.views({//indica donde estan las vistas
            engines: {
              hbs: handlerbars
            },
            relativeTo: __dirname,
            path: 'views',
            layout: true,
            layoutPath: 'views'
          })
        
       

        server.route(routes)

        await server.start();
        console.log('info',`Servidor lanzado en: ${server.info.uri}`)
        
    } catch (error) {
        
    }
   

}
init();
