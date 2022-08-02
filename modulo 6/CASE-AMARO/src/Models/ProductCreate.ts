export  class ProductCreate{
    constructor(
       public id: string,
       public name: string,
       public type: string,
       public details: string,
       public price: string,
    ){}
    
  }

  export type createInput = {
    name: string,
    type: string,
    details: string,
    price: string,
  }
  