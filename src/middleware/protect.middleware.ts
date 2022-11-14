import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { validationResult } from "express-validator";


dotenv.config();

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

export const handleValidValues = (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) return response.status(400).json({ errors: errors.array() });
    else return next();
}