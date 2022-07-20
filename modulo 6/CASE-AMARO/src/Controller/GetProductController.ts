import { Request, Response } from "express";
import GetProductBusiness from '../Business/GetProductBusiness'

const getProductBusiness = new GetProductBusiness()


export class GetProduct {

    getProduct = async (req: Request, res: Response) => {
        
        const { name } = req.body


        try {
            const Details = await getProductBusiness.DetailsProduct(name)
            res.status(201).send({Details})
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}