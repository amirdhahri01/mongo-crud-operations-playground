import express from "express"
import { createProductController, deleteProductController, getProductController, getProductsController, updateProductController } from "../controllers/product.controller.js";

const ProductRoutes = express.Router();

ProductRoutes.route("").post(createProductController).get(getProductsController)

ProductRoutes.route("/:id").get(getProductController).put(updateProductController).delete(deleteProductController)

export default ProductRoutes