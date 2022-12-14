import jwt from "jsonwebtoken";

export const createJwt = (user: any) => {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET as string);
    return token;
};