import { IUser } from "./user.interface"

export interface IAuthForn{
    name: string
    email: string
    password: string
}

export interface IAuthResponse{
    user: IUser
    accessToken: string
}