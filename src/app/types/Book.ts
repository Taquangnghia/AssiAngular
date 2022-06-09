export type Book ={
    _id:string,
    name:string,
    img:string,
    price:number,
    desc:string,
    sale:number,
    statu?:string,
    category:string,
    newPrice: number,
}
export type CartBook = {
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
