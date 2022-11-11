import express, { Request, Response } from "express";
import ProductRouter from "./router/productRouter.router";
import UpdatePointRouter from "./router/updatePointRouter.router";
import UpdateRouter from "./router/updateRouter.router";

const app = express();
app.use(express.json());

app.use("/api/v1/product", ProductRouter);
app.use("/api/v1/updatepoint", UpdatePointRouter);
app.use("/api/v1/update", UpdateRouter);
app.all("*", (request: Request, response: Response) => {
    return response.status(404).json({ generiError: "Sorry Service NOT FOUND"});
})


app.listen(8080, () => console.log("Server Rodando com Sucesso"));