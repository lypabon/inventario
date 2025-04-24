import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";
/* creamos el enrutador */
const router = Router();

/* configuramos repsuesta desde server metodo http get */
router.get("/", categoriaController.getCategorias );
router.post("/", categoriaController.postCategorias );

router.get("/:id", categoriaController.getCategory );

router.delete("/:id", categoriaController.deleteCategory );

router.put("/:id", categoriaController.updateCategorias );


/* hacemos disponible a router en toda la app */
export default router;
 