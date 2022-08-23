import { MembrosDasFamilias } from "../data/MembrosDaFamiliaData"
import { ListaMembrosDeFamilia, MembrosFamilia } from "../models/MembrosFamilia"
import { idGenerate } from "../services/idGenerate"


export class MembrosFamiliaBusiness {

    constructor(
        private membrosfamiliaData: MembrosDasFamilias,
        private idGenerator: idGenerate

    ) { }

    membrosdaFamilia = async (dados: MembrosFamilia) => {

        const { nome, idade, parentesco, id_familia } = dados

        if (!nome || !idade || !parentesco || !id_familia) {

            throw new Error("Cadastro Inválido")
        }
        





        const membrosFamiliaAdicionar = new ListaMembrosDeFamilia(
            nome,
            idade,
            parentesco,
            id_familia,
        )

        await this.membrosfamiliaData.MembrosdaFamilia(membrosFamiliaAdicionar)


    }


}