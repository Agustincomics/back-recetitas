import {model, Schema} from 'mongoose'

const recetaScheme = new Schema({
    nombreReceta: {
        type: String,
        minLength:2,
        maxLength:100,
        unique: true,
        required: true
    },
    Instrucciones: {
        type: String,
        minLength:2,
        maxLength:1000000,
        unique: true,
        required: true
    },
    imagen:{
        type: String,
        unique: true,
        required: true
    }
})

const Receta = model('receta', recetaScheme)

export default Receta;