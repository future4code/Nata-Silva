import { CardData } from "../Data/CardData";
import { PaymentData } from "../Data/PaymentData";
import { Authenticator } from "../Services/Authenticator";
import { IdGenerate } from "../Services/IdGenerate.1";

const paymentData = new PaymentData()
const idGenerate = new IdGenerate()
const autheticator = new Authenticator()
const cardData = new CardData()

export class PaymentBusiness {

    creditPayment = async (amount:number, creditCard:string, token:string) => {

        if(!amount){
            throw new Error("Enter an amount");    
        }

        if(!creditCard){
            throw new Error("Enter a credit card");   
        }

        if(!token){
            throw new Error("Verify your authorization");      
        }

        const id = idGenerate.generateId()
        const userId = autheticator.getTokenData(token)
        const card = await cardData.getCardByNumber(creditCard)


        if(!card){
            throw new Error("incorret card");     
        }


        await paymentData.creditPayment({
            id:id,
            amount:amount,
            payment:"Credit card",
            creditCard: creditCard,
            paymentSituation: "Paid",
            userId: userId.id
        })

    }

    boletoPayment = async (amount: number, token: string) => {

        if(!amount){
            throw new Error("Enter an amount");  
        }

        if(!token){
            throw new Error("Verify your authorization");   
        }

        const userId = autheticator.getTokenData(token)
        const id = idGenerate.generateId()
        const boletoId = idGenerate.generateId()

        await paymentData.boletoPayment({
            id:id,
            amount: amount,
            payment: "Boleto",
            paymentSituation: "Waiting Payment",
            idBoleto: boletoId,
            userId: userId.id
        })

        return boletoId

    }

    getPayment = async(token:string) => {

        if(!token){
            throw new Error("Verify the authorization token"); 
        }

        const getTokenData = autheticator.getTokenData(token)

        const result = await paymentData.getPaymentByUserId(getTokenData.id)

        return result
    }

} 
