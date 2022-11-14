import { Request, Response, Router } from "express";
import { body, check, oneOf } from "express-validator";

const UpdateRouter = Router();

UpdateRouter.put("/:id",
                    body('title').optional(), 
                    body('body').optional(), 
                    body('version').optional(),
                    check('status').isIn(['IN_PROGESS', 'SHIPPED', 'DEPRECATED']),
                    (request: Request, response: Response) => {
                        return response.json({message: 'foi'})

});

UpdateRouter.post("/",
                    body('title').exists(), 
                    body('body').exists().isString(), 
                    (request: Request, response: Response) => {

});

UpdateRouter.delete("/:id/", (request: Request, response: Response) => {

});

export default UpdateRouter;