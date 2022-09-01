export type CreditPayment = {
    id:string,
    amount:number,
    payment: string,
    creditCard: string,
    paymentSituation:string,
    userId: string
}


export type BoletoPayment = {
    id: string,
    amount: number,
    payment: string,
    paymentSituation: string
    idBoleto: string,
    userId: string
} 