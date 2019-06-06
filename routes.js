const Hand = require('./controllers/handlers')


module.exports = [
  {  
    path: '/',
    method: 'GET',
    handler: Hand.home
        
    },
  {  
    path: '/comentarios',
    method: 'GET',
    handler: Hand.Comentarios
    },
  {  
    path: '/galeria',
    method: 'GET',
    handler: Hand.Galeria
    },
  {  
    path: '/created',
    method: 'POST',
    handler: Hand.Created
  },
 
  {
     path: '/delete/{id}',
    method: 'GET',
    handler: Hand.Delete
  },
    {
        method: 'GET',//el metodo get, post delete
        path: '/{param*}',
        handler: {
            directory:{
                path: '.', //el directorio actual
                index: ['index.html']
            }

        }
    },
  
]