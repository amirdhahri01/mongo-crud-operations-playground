import express from "express";
import ProductRoutes from "../routes/product.route.js";
import { errorHandling, notFoundHandling } from "../middlewares/globalErrosHandling.js";

const app = express();

//MiddleWares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Routes
app.use("/api/projcets", ProductRoutes);
//Error Handling
app.use(notFoundHandling)
app.use(errorHandling)

export default app