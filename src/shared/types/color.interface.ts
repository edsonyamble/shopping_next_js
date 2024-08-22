export interface IColor {
    id: string
    createdAt: string
    name: string
    value: string
    storeId: string
}
//создание цвета
// это исключать 'id' | 'createdAt' | 'storeId'
//Omit  это исключить
//Pick  это выбрать
export interface IColorInput extends Pick<IColor, 'name' | 'value'> {
}
