import { Request, Response } from "express";
import CreateProductBusiness from "../Business/CreateProductBusiness"

const createProductBusiness = new CreateProductBusiness()

export class CreateProduct {

    
    createProduct = async (req: Request, res: Response) => {
        
        const { name, type, details, price } = req.body

        const input = { name , type, details, price}       
        
        try {
            const insertProductFromDB = await createProductBusiness.createBand( input )
            res.status(201).send({ message: 'Produto adicionado com sucesso !', insertProductFromDB })
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}