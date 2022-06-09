export type Book ={
    _id:string,
    name:string,
    img:string,
    price:number,
    desc:string,
    category:string,
    newPrice: number,
    quantity:number,
    totalPrice: number;

}
export type createType = {
    name: string,
    price: number,
    newPrice: number,
    image: string,
    category: string,
    desc: string
  
  }
  export type CartType = {
    _id: string,
    name: string,
    price: number,
    newPrice: number,
    img: string,
    category: string,
    desc: string,
    quantity: number,
    totalPrice: number;
  
  }
