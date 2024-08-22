export interface Istore{
    id: string
    title: string
    description: string
}
//создание
export interface IstoreCreate extends Pick<Istore, 'title'>{}
//редактирование
export interface IstoreEdit extends Omit<Istore, 'id'>{}