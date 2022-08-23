import { BaseDatabase } from "../data/BaseDataBase"



export class ListaDeFamilias extends BaseDatabase {

    protected TABLE_NAME = "Lista_de_familias"

    adicionarFamilia = async (familia: any) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(familia)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}
