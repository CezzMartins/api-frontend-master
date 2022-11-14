
import { Request, Response, Router } from "express";
import { body } from "express-validator";

const UpdatePointRouter = Router();

UpdatePointRouter.put("/:id", 
                            body('name').optional().isString(), 
                            body('description').optional().isString(),
                            body('updateId').exists().isString(),
                            (request: Request, response: Response) => {

});

UpdatePointRouter.post("/", 
                        body('name').optional().isString(), 
                        body('description').optional().isString(),
                        (request: Request, response: Response) => {

});

UpdatePointRouter.delete("/:id", (request: Request, response: Response) => {

});

export default UpdatePointRouter; 