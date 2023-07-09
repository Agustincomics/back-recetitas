import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarReceta = [
    check("nombreReceta").notEmpty().withMessage("El nombre de la receta es un dato obligatorio").isLength({min:2, max:100}).withMessage("El nombre de la receta es desde 2 caracteres hasta 100 caracteres"),
    check("imagen").notEmpty().withMessage("La imagen es un dato obligatorio").matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|svg|jpeg)$/).withMessage("La imagen debe tener el formato adecuado (jpg, png, svg)"),
    check('Instrucciones').notEmpty().withMessage("Las instrucciones de la receta es un dato obligatorio").isLength({min:2, max:1000000}).withMessage("Las instrucciones de la receta es desde 2 caracteres hasta 100.000 caracteres"),
    (req,res, next) =>{resultadoValidacion(req, res, next)}
];

export default validarReceta;