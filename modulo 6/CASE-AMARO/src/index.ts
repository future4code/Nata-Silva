import { app } from "./Services/app";
import { CreateProduct } from "./Controller/CreateProductController";



const createProduct = new CreateProduct()

app.post("/produts", createProduct.createProduct)

//