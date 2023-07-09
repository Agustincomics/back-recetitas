import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        maxlength: 30,
        required: true
    },
    email:{
        type: String,
        maxlength: 200,
        unique:true,
        required:true
    },
    contra:{
        type: String,
        required:true
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;