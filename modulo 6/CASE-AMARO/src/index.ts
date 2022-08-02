import { app } from "./Services/app";
import { CreateProduct } from "./Controller/CreateProductController";
import { GetProduct } from "./Controller/GetProductController";




const createProduct = new CreateProduct()
const getProduct = new GetProduct()

app.post("/produts", createProduct.createProduct)

//
// { 
//     "name": "Camisa Nike",
//     "type": "Roupas",
//     "details": "Preto, P ",
//     "price": "150,20"
// }

app.get("/produts", getProduct.getProduct)

// 
// {
//  "name": "Camisa Nike"    
//}