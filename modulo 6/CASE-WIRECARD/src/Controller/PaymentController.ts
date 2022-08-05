import { Request, Response } from "express";
import { PaymentBusiness } from "../Business/PaymentBusiness";

const paymentBusiness = new PaymentBusiness()

export class PaymentController {

    creditPayment = async (req:Request, res:Response) => {
        try {

            const {amount, creditCard} = req.body

            const token = req.headers.authorization as string

            const response = await paymentBusiness.creditPayment(amount, creditCard, token)

            res.send({message:"purchase made"})

        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }


    boletoPayment = async (req: Request, res:Response) => {
        try {

            const {amount} = req.body

            const token = req.headers.authorization as string

            const response = await paymentBusiness.boletoPayment(amount, token)

            res.send({message:"payment code",response})

        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    getPayment = async (req: Request, res:Response) => {
        try {

            const token = req.headers.authorization as string

            const result = await paymentBusiness.getPayment(token)

            res.send(result)

        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
} 