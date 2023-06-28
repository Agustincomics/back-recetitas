import Receta from "../models/productos"

export const obtenerRecetas = async (req, res)=>{
    try {
        const recetas = await Receta.find()
        res.status(200).json(recetas)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las recetas'
        })
    }
};

export const crearReceta = async (req, res)=>{
    try {
        console.log(req.body);
        const recetaNueva = new Receta(req.body)
        await recetaNueva.save()
        res.status(201).json({
            mensaje: 'La receta se creo correctamente',
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear la receta'
        })
    }
}

export const borrarReceta = async (req, res)=>{
    try {
        console.log(req);
        console.log(req.params.id);
        await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje:'La receta fue eliminada',
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar borrar la receta'
        })
    }
}

export const editarReceta = async (req, res)=>{
    try {
        Receta.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje:'El producto se edito correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar modificar la receta'
        })
    }
}