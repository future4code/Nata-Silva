import { Request, Response } from "express"
import insertAdressDb from "../data/insertAdressDb"
import { getFullAdress } from "../services/getFullAdress"

export const insertAdress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        
        const address = await getFullAdress(cep)

        if(!address){
            throw new Error("cep inválido")
        }
        
        await insertAdressDb(address)

        res.status(201).send("Endereco criado com sucesso")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}