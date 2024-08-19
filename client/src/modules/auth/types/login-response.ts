import { IUser } from "./user";

export interface LoginResponse {
    message: string,
    token: string,
    user: IUser
    status: number
}

export interface ValidationFailed {
    message: string,
    errors: {
        email?: string[],
        password?: string[]
    },
    status: number
}