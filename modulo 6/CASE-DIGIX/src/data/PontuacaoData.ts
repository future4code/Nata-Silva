import { BaseDatabase } from "../data/BaseDataBase"



export class PontuacaoFamilias extends BaseDatabase {

    protected TABLE_NAME = "Pontuacao"

    PontuarFamilia = async (Pontuacao: any) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(Pontuacao)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}
