export interface IStore{
    id: string
    title: string
    description: string
}
//создание
export interface IStoreCreate extends Pick<IStore, 'title'>{}
//редактирование
export interface IStoreEdit extends Omit<IStore, 'id'>{}