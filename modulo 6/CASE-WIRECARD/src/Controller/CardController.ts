import { Request, Response } from "express"
import { CardBusiness } from "../Business/CardBusiness"

const cardBusiness = new CardBusiness()

export class CardController {

    card = async (req:Request, res: Response) => {
        try {

            const {number, name, expiration, cvv} = req.body
            const token = req.headers.authorization as string

            const response = await cardBusiness.card(number, name, expiration, cvv, token)

            res.status(201).send("card registered successfully")

        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    } 
} 