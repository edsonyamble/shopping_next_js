export interface ICategory {
    id: string
    createdAt: string
    title: string
    description: string
    storeId: string
}
//создание цвета
// это исключать 'id' | 'createdAt' | 'storeId'
//Omit  это исключить
//Pick  это выбрать
export interface ICategoryInput extends Pick<ICategory, 'title' | 'description'> {
}