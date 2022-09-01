import { Request, Response } from "express";
import { ListaDeFamiliaBusiness } from "../business/ListaDeFamiliasBusiness";
import { DadosFamilia } from "../models/ListaDeFamilia";


export class ListaDeFamiliaController {

    constructor(
        private listaDeFamiliaBusiness: ListaDeFamiliaBusiness
    ) { }

    adicionarFamilia = async (req: Request, res: Response) => {

        const { nome, idade, cpf, renda_total } = req.body

        const NovaFamilia: DadosFamilia = {
            nome,
            idade,
            cpf,
            renda_total
        }

        try {
            const DadosdaFamilia = await this.listaDeFamiliaBusiness.adicionarFamilia(NovaFamilia)
            res.status(201).send({
                message: `Familia adicionada`, DadosdaFamilia
            })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }
}