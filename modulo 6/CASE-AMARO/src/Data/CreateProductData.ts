// import { Produto } from "../Models/Produto";
import { BaseDatabase } from "./BaseDatabase";

export class CreateProductData extends BaseDatabase {

    Create = async (produto: any): Promise<any> => {
        console.log(produto)
        await this.connection("Cadastro_Produtos")
        .insert({
            id: produto.id,
            name: produto.name,
            type: produto.type,
            details: produto.details,
            price: produto.price,
        })
    }
    
}