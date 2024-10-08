import { IUser } from "./user.interface"

export interface IReview {
    id: string
    createdAt: string
    name: string
    text: string
    rating: string
    user: IUser
}
//создать отзывов
export interface IReviewInput extends Pick<IReview, "rating" | "text"> {
}
