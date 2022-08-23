import { BaseDatabase } from "../data/BaseDataBase"

export default class BuscaCadastro extends BaseDatabase {
    obterDetalhes = async (nome: string) => {
        const result = await this.connection("Lista_de_familias")
        .select("*")
        .where({nome:nome})
        return result
    }
        
}