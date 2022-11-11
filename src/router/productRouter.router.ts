import { Request, Response, Router } from "express";

const  ProductRouter = Router();

ProductRouter.get("/", (request: Request, response: Response) => {
    return response.json({ message: "works" });
});

ProductRouter.get("/:id", (request: Request, response: Response) => {

});

ProductRouter.put("/:id", (request: Request, response: Response) => {

});

ProductRouter.post("/", (request: Request, response: Response) => {

});

ProductRouter.delete("/:id/", (request: Request, response: Response) => {

});

export default ProductRouter