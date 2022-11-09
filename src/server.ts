import express, { Request, Response } from "express";

const server = express();

server.get('/', (request: Request, response: Response) => {
    return response.status(200).send();
})

server.listen(8080, () => console.log("Server Rodando com Sucesso"));