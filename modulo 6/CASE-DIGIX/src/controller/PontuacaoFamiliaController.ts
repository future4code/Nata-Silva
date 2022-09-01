import { Request, Response } from "express";
import { PontuacaoDeFamiliaBusiness } from "../business/PontuacaoFamiliaBusiness";
import { PontosFamilia } from "../models/PontosDeFamilia";


export class PontuacaoDeFamiliaController {

    constructor(
        private pontuacaoDeFamiliaBusiness: PontuacaoDeFamiliaBusiness
    ) { }

    PontuarFamilia = async (req: Request, res: Response) => {

        const { pontos, id_familia } = req.body

        const NovaPontuacaoFamilia: PontosFamilia = {
            pontos,
            id_familia
        }

        try {
            const PontosdaFamilia = await this.pontuacaoDeFamiliaBusiness.PontuarFamilia(NovaPontuacaoFamilia)
            res.status(201).send({
                message: `Familia Pontuada`, PontosdaFamilia
            })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }
}