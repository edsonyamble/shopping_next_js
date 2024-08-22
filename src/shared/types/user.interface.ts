import { IOrder } from "./order.interface"
import { IProduct } from "./product.interface"
import { Istore } from "./store.inteface"

export interface IUser {
    id: string
    name: string
    email: string
    picture: string
    favorites: IProduct[]
    stores: Istore[]
    orders: IOrder[]
}