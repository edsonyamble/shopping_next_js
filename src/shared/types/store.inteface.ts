export interface Istore{
    id: string
    title: string
    description: string
}
export interface IstoreCreate extends Pick<Istore, 'title'>{}

export interface IstoreEdit extends Omit<Istore, 'id'>{}