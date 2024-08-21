export interface IUser {
    id: string
    name: string
    email: string
    picture: string
    favorites: Iproduct[]
    stores: Istore[]
    orders: Iorders[]
}