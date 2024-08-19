export interface IUser {
    id: number,
    email: string,
    name: string,
    createdAt: string,
    updatedAt: string,
}

export interface UserResponse {
    message: string,
    user: IUser,
    status: number
}