import { Request, Response } from "express";
import { MembrosFamiliaBusiness } from "../business/MembrosFamiliaBusiness";
import { MembrosFamilia } from "../models/MembrosFamilia";


export class MembrosDaFamiliaController {

    constructor(
        private membrosFamiliaBusiness: MembrosFamiliaBusiness
    ) { }

    membrosFamilia = async (req: Request, res: Response) => {

        const { nome, idade, parentesco, id_familia } = req.body

        const MembrosNovaFamilia: MembrosFamilia = {
            nome,
            idade,
            parentesco,
            id_familia
        }

        try {
            const MembrosDadosdaFamilia = await this.membrosFamiliaBusiness.membrosdaFamilia(MembrosNovaFamilia)
            res.status(201).send({
                message: `Membros adicionado adicionada`, MembrosDadosdaFamilia
            })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }
}