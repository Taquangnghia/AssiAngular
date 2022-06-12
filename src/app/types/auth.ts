export type User={
    _id?:string,
    name?:string,
    email:string,
    password:string,
    role:number,
    status:boolean;
  }
  export type UserToken={
    asscessToken:string,
    user:{
      email:string,
      role:number,
      _id?:string,
      name:string,
      status:boolean;
    }
  } 
  export type LoginResponse = {
    email: string,
    _id: string,
   
  }