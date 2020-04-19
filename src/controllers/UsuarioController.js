import Usuario from '../models/Usuario';
import User from '../models/Usuario';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _=require('underscore');


const UsuarioController={
  async   nuevoUsuario(req,res){
        var body=req.body;
        console.log(req.body.password);
        
        body.password =  bcrypt.hashSync(req.body.password,  bcrypt.genSaltSync(10))
        
        try {
            var usuario=await Usuario.create(body);
            
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({
                message:'error al guardad',
                error
            })
            console.log(error);
            
        }
    },
    async editarUsuario(req,res){
        // permite configurar que campos unicamente se permiten cambiar
        var body = _.pick(req.body,['nombre','email','password','activo']); 
        var _id= req.params.id;
        console.log(body,_id);
        if(body.password){
            body.password=bcrypt.hashSync(body.password,bcrypt.genSaltSync(10));
        }

        try {
           var usuarioDB= await Usuario.findByIdAndUpdate(_id,body,{new:true,runValidators:true});
           res.status(200).json({usuarioDB});
        } catch (error) {
            res.status(500).json({
                message:'error al guardad',
                error
            })
            console.log(error);
            
        }

    },
    async login(req,res){
        const {email,password}=req.body;

        try {
           const userDB= await User.findOne({email:email});
           if(!userDB){
            return res.status(500).json({message:'no existe el email'});

           }

           if(!bcrypt.compareSync(password,userDB.password)){
            return res.status(500).json({message:'contraseña incorrecta'});
           }

           //generar Token 
         const token=  jwt.sign({
               data:userDB,

           },'secreta',{expiresIn:60*60*24*30});


           res.json({
            userDB,
            token
           })

        } catch (error) {
            
        }

    }
}

export default UsuarioController;