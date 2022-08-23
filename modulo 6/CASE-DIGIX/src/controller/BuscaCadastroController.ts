import { Request, Response } from "express";
import BuscaCadastroBusiness from "../business/BuscaCadastroBusiness";


const buscaCadastroBusiness = new BuscaCadastroBusiness()


export class BuscaCadastroController {

    pegarCadastro = async (req: Request, res: Response) => {
        
        const { nome } = req.body


        try {
            const Detalhes = await buscaCadastroBusiness.DetalhesCadastro(nome)
            res.status(201).send({Detalhes})
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}