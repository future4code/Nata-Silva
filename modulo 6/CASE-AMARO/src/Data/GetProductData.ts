import { BaseDatabase } from "./BaseDatabase";

export default class GetProductData extends BaseDatabase {
    getDetails = async (name: string) => {
        const result = await this.connection("Cadastro_Produtos")
        .select("*")
        .where({ name:name })
        return result
    }
        
}
