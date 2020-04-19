import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
const Schema=mongoose.Schema;

import uniqueValidator from 'mongoose-unique-validator'

const roles={
    values:['ADMIN','USER'],
    message:'rol invalido',
}

const userSchema=new Schema({
    nombre: {type:String,  required :[true,'el nombre es necesario'],},
    email: {type:String,
            required:[true,'el email es necesario'],
            unique:true},
    password:{type:String,required:[true,'la password es obligatoria']},
    date:{type:Date, default:Date.now},
    role: {type:String, default:'USER', enum:roles},
    activo:{type:Boolean,default:true}
})

userSchema.plugin(uniqueValidator,{message:'ERROR se esperaba {PATH} único.'});

// elimina la contraseña en las respuestas json del servidor
userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
   }

const User = mongoose.model('User',userSchema);



export default User;