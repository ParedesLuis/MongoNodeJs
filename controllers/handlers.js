const comentModel = require('../models/comentarios')


//------------------------Crear comentario---------------------------
async function Created(Req,Res){
    let data 

    try {
        data = new comentModel(Req.payload)
        const result = await data.save()
        console.log(`Comentario creado con exito ${result}`)

    } catch (error) {
        
    }
    return Res.redirect(`/comentarios`)
    
}
//---------------------fin Crear comentario-----------------------------

//---------------------------Eliminar comentario------------------------

async function Delete(Req,Res){
    const { id } = Req.params 
  
    await comentModel.remove({_id: id})
    return Res.redirect('/comentarios')
}

//---------------------fin Eliminar comentario-----------------------------

//---------------------------Enrutamiento-------------------
function home (Req,Res){

    return Res.view('index',{
        title: "Home"
    })

}

async function Comentarios(Req,Res){

    let data = await comentModel.find()
    
    return Res.view('comentarios',{
        title: "Comentarios",
        comentarios: data,
        number: data.length
    })

}
function Galeria(Req,Res){

    return Res.view('galeria',{
        title: "Galeria"
    })

}
function Login(Req,Res){

    return Res.view('login',{
        title: "login"
    })

}


//-----------------------------------------------------------
module.exports ={
    Created,
    home,
    Comentarios,
    Galeria,
    Delete,
    Login
}