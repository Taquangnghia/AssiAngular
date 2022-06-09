export type User={
    _id?:string,
    name?:string,
    email:string,
    password:string,
    role?:number
  }
  export type UserToken={
    asscessToken:string,
    user:{
      email:string,
      role:number,
      _id:string,
      name:string
    }
  } 
  export type LoginResponse = {
    email: string,
    _id: string
  }