import express, { Request, Response } from "express";
import ProductRouter from "./router/productRouter.router";
import UpdatePointRouter from "./router/updatePointRouter.router";
import UpdateRouter from "./router/updateRouter.router";
import cors from 'cors';
import { protect } from "./modules/auth";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use("/api/v1/product", protect, ProductRouter);
app.use("/api/v1/updatepoint", protect, UpdatePointRouter);
app.use("/api/v1/update", protect, UpdateRouter);
app.all("*", (_: Request, response: Response) => response.status(404).json({ error: "Service NOT FOUND"}));


app.listen(8080, () => console.log("Server Rodando com Sucesso"));