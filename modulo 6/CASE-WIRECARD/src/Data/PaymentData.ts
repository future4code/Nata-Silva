import { BoletoPayment, CreditPayment } from "../Models/Payment";
import { BaseDatabase } from "./BaseDatabase";



export class PaymentData extends BaseDatabase {

    creditPayment = async (payment: CreditPayment) => {
        await this.connection("Payment_wirecard")
        .insert({
            id: payment.id,
            amount:payment.amount,
            payment: payment.payment,
            credit_card: payment.creditCard,
            payment_situation: payment.paymentSituation,
            user_id: payment.userId
        })

    }

    boletoPayment = async (payment: BoletoPayment) => {
        await this.connection("Payment_wirecard")
        .insert({
            id: payment.id,
            amount:payment.amount,
            payment: payment.payment,
            payment_situation:"Waiting payment",
            id_ticket: payment.idBoleto,
            user_id: payment.userId
        })
    }

    getPaymentByUserId = async (id:string) => {
        try {

            const result = await this.connection("Payment_wirecard")
            .select("*")
            .where({user_id: id})

            return result

        } catch (error:any) {
            throw new Error(error.message);

        }
    }
} 