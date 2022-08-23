import { PontuacaoFamilias } from "../data/PontuacaoData"
import { ListaPontuarDeFamilia, PontosFamilia } from "../models/PontosDeFamilia"
import { idGenerate } from "../services/idGenerate"


export class PontuacaoDeFamiliaBusiness {

    constructor(
        private familiaData: PontuacaoFamilias,
        private idGenerator: idGenerate

    ) { }

    PontuarFamilia = async (dados: PontosFamilia) => {

        const { pontos, id_familia } = dados

        if (!pontos || !id_familia) {

            throw new Error("Cadastro Inválido")
        }




        const familiaPontuar = new ListaPontuarDeFamilia(
            id_familia,
            pontos,

        )

        await this.familiaData.PontuarFamilia(familiaPontuar)


    }


}
