import Nota from '../models/Nota'

const NotaController ={
    async nuevaNota(req,res){
        const body=req.body;
        body.usuarioId=req.user._id;
        
        try {
            const notaDB=await Nota.create(body);
            res.status(200).json(notaDB);
        } catch (error) {
            res.status(500).json({
                mensaje:'Ocurrio un error' ,
                error
            })
            console.log(error);
            
        }
    },
    async allNotas(req,res){
    
        
        const usuarioId=req.user._id;
        try {
            const notaDB=await Nota.find({usuarioId});
            console.log(notaDB);
            
            res.status(200).json(notaDB);
        } catch (error) {
            res.status(500).json({
                mensaje:'Ocurrio un error' ,
                error
            })
            console.log(error);
            
        }
    },
    async nota(req,res){
        const _id=req.params.id;

        try {
            const notaDB=await Nota.findById(_id);
            if(!notaDB){
                res.status(404).json({mensaje:'no existe esa nota'});
            }
            return res.status(200).json({
                notaDB
            });
            
        } catch (error) {
            res.status(500).json({
                mensaje:'error en consulta'
            })
        }
    },
    async update(req,res){
        const _id=req.params.id;
        const body=req.body;
     
        
        try {
            const notaDB=await Nota.findByIdAndUpdate(_id,body,{new:true});
            if(!notaDB){
                res.status(404).json({mensaje:'no existe esa nota'});
            }
            return res.status(200).json({
                notaDB
            });
            
        } catch (error) {
            res.status(500).json({
                mensaje:'error en consulta'
            })
        }
    },
    async delete(req,res){
        const _id=req.params.id;
        const body=req.body;
        try {
            const notaDB=await Nota.findByIdAndDelete(_id,body);
            if(!notaDB){
                res.status(404).json({mensaje:'no existe esa nota'});
            }
            return res.status(200).json({
                mensaje:'eliminado exitosamente'
            });
            
        } catch (error) {
            res.status(500).json({
                mensaje:'error en consulta'
            })
        }
    }

}

export default NotaController;