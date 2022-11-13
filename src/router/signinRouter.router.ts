import { Request, Response, Router } from "express";
import userController from "../controllers/user.controller";

const SigninRouter = Router();

SigninRouter.get("/", userController.singIn);

export default SigninRouter;