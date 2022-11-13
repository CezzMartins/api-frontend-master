import { Request, Response, Router } from "express";
import userController from "../controllers/user.controller";

const UserRouter = Router();

UserRouter.post("/", userController.createNewUser);

UserRouter.get("/:id", (request: Request, response: Response) => {

});

UserRouter.put("/:id", (request: Request, response: Response) => {

});

UserRouter.delete("/:id/", (request: Request, response: Response) => {

});

export default UserRouter;