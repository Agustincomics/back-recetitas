import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, obtenerRecetas } from "../controllers/recetas.controllers";

const router = Router()

/* app.get('/prueba', (req, res)=>{
    res.send('esto es una prueba de la peticion GET a mi backend');
})  */

router.route('/receta')
.get(obtenerRecetas)
.post(crearReceta)
router.route('/receta/:id').delete(borrarReceta).put(editarReceta);
export default router;
