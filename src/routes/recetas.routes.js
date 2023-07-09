import { Router } from "express";
import { check } from "express-validator";
import { borrarReceta, crearReceta, editarReceta, obtenerReceta, obtenerRecetas } from "../controllers/recetas.controllers";
import validarReceta from "../helpers/validarReceta";

const router = Router()

/* app.get('/prueba', (req, res)=>{
    res.send('esto es una prueba de la peticion GET a mi backend');
})  */

router.route('/receta')
.get(obtenerRecetas)
.post(validarReceta, crearReceta)
router.route('/receta/:id').delete(borrarReceta).put(validarReceta, editarReceta).get(obtenerReceta);
export default router;
