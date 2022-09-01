import { ListaDeFamilias } from "../data/ListaDeFamiliasData"
import { DadosFamilia, ListaDeFamilia } from "../models/ListaDeFamilia"
import { idGenerate } from "../services/idGenerate"


export class ListaDeFamiliaBusiness {

    constructor(
        private familiaData: ListaDeFamilias,
        private idGenerator: idGenerate

    ) { }

    adicionarFamilia = async (dados: DadosFamilia) => {

        const { nome, idade, cpf, renda_total,} = dados

        if (!nome || !idade || !cpf || !renda_total) {

            throw new Error("Cadastro Inválido")
        }
        if (idade < 18) {

            throw new Error("idade Inválida")
        }
        if (cpf.length < 11) {
            throw new Error("cpf inválido")
        }
        if (renda_total > 1500)

            throw new Error("renda Inválida")
        

        //dependencia   
        const id = this.idGenerator.generateId()


        const familiaAdicionar = new ListaDeFamilia(
            id,
            nome,
            idade,
            cpf,
            renda_total,
        )

        await this.familiaData.adicionarFamilia(familiaAdicionar)


    }


}
