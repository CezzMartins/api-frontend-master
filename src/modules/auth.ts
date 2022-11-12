import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();
export const createJwt = (user: any) => {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET as string);
    return token;
};

export const protect = (request: any, response: Response, next: NextFunction) => {
    const bearer = request.headers.authorization;
    if(!bearer) return response.status(401).json({ message: "Not authorized."});
    
    const [, token] = bearer.split(" ");
    if(!token) return response.status(401).json({ message: "Invalid Token" });

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET as string);
        request.user = user;
        next();
    } catch(err){
        response.status(401).json({ message: "Invalid Token."});
    }
}