
export type Product ={
    _id?:string,
    name:string,
    img:string,
    price:number,
    desc:string,
    newPrice: number,
    category: string,
}
export type CartType = {
    _id: string,
    name: string,
    price: number,
    newPrice: number,
    imge: string[],
    stock: number,
    category: string,
    description: string,
    author: string,
    quantity: number,
    totalPrice: number;
  
  }