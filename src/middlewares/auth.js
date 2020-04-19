const jwt = require('jsonwebtoken');

function verificarAuth(req,res,next){
    //get proviene de la cabecera de la peticion , params(url) body(cuerpo)
    const token=req.get('token');

    jwt.verify(token,'secreta',(error,decoded)=>{
        if(error){
            return res.status(400).json({
                message:'acceso invalido',
                error
            });
        }
        req.user=decoded.data;
        next();
    })
}
function vericarAdmin(req,res,next){
    if(req.user.role=='ADMIN'){
        next();
    }else{
        return res.status(401).json({
            message:'permisos invalidos'
        })
    }

}

module.exports= {verificarAuth,vericarAdmin};