import { Request, Response } from "express";
import prisma from "../db";
import { createJwt } from "../auth/createJwt.auth";
import { comparePasswords, hashPassword } from "../modules/auth";


class ProductController {
    
    constructor(){}

    public async get(request: any, response: Response) {
        const user = await prisma.user.findUnique({
            where: {
                id: request.user.id
            },
            include: {
                products: true
            }
        });
        response.json({ data: user?.products })
    }

    public async getById(request: any, response: Response) {
        const id = request.params.id;
        const product = await prisma.product.findFirst({
            where: {
                id: id,
                userId: request.user.id
            }
        })
        response.json({ data: product })
    }
}

export default new ProductController();

