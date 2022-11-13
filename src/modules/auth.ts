import dotenv from "dotenv";
import bcrypt from "bcrypt"

dotenv.config();

export const comparePasswords = (password: string, hash: string ) => {
    return bcrypt.compare(password, hash);
}

export const hashPassword = (password: string) => {
    return bcrypt.hash(password, 5);
}