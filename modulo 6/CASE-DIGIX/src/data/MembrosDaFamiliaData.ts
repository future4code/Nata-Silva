import { BaseDatabase } from "../data/BaseDataBase"



export class MembrosDasFamilias extends BaseDatabase {

    protected TABLE_NAME = "Membros_da_familia"

    MembrosdaFamilia = async (membros: any) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(membros)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}
