import { Request, Response } from "express";
import prisma from "../db";
import { createJwt } from "../auth/createJwt.auth";
import { comparePasswords, hashPassword } from "../modules/auth";


class UserController {
    
    constructor(){}

    public async createNewUser(request: Request, response: Response) {
        const user = await prisma.user.create({
            data: {
                username: request.body.username,
                password: await hashPassword(request.body.password),
                email: request.body.email
            }
        });
    
        const token = createJwt(user);
        return response.json({ token });
    }
    
    public async singIn(request: Request, response: Response) {
        const user = await prisma.user.findUnique({
            where: {
                username: request.body.username
            }
        });
    
        const isValid = await comparePasswords(request.body.password, user?.password as string);
        if(!isValid) return response.status(401).json({ Message: "Password or Username Invalid!"});
        
        const token = createJwt(user);
        return response.json({ token });
    }
}

export default new UserController();

