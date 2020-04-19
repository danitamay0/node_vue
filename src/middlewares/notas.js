import Nota from '../models/Nota'
async function miNota(req,res,next){
    const notaId=req.params.id;
  
    try {
      const nota= await  Nota.findOne({_id:notaId});
      if(!nota){
        return res.status(404).json({mensaje:'no existe esa nota'});
      }
      console.log(req.user._id);
      
      if(req.user._id==nota.usuarioId){
          next();
      }
      else{
        return res.status(404).json({mensaje:'no es tu nota'});
      }
    } catch (error) {
        return res.status(500).json({mensaje:'erorr midd'});
    }

   

}

module.exports ={miNota}