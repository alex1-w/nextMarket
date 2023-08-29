interface IProduct {
    name: string,
    weight: number,
    id: number
    price: number
}


interface IFullProduct extends IProduct {
    count: number
}


 export interface IBrand{
    name: string
 }