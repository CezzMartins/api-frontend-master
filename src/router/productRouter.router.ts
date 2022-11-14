import { Request, Response, Router } from "express";
import { body } from "express-validator";
import { handleValidValues } from "../middleware/protect.middleware";

const  ProductRouter = Router();

ProductRouter.get("/", (request: Request, response: Response) => {
    return response.json({ message: "works" });
});

ProductRouter.get("/:id", (request: Request, response: Response) => {

});

ProductRouter.put("/:id", body("name").isString(), handleValidValues, (request: Request, response: Response) => {
    
});

ProductRouter.post("/", body("name").isString(), handleValidValues, (request: Request, response: Response) => {

});

ProductRouter.delete("/:id/", (request: Request, response: Response) => {

});

export default ProductRouter