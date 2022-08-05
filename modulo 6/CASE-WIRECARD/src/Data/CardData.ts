import { CreditCard } from "../Models/CreditCard";
import { BaseDatabase } from "./BaseDatabase";


export class CardData extends BaseDatabase {

    Card = async (card:CreditCard) => {
        await this.connection("Card_wirecard")
        .insert({
            id: card.id,
            number: card.number,
            name: card.name,
            expiration: card.expiration,
            cvv: card.cvv,
            user_id: card.userId
        })
    }

    getCardByNumber = async (number:string) => {
        const result = await this.connection("Card_wirecard")
        .select("*")
        .where({number:number})

        return result[0]
    }


    validateCard = async (number:string, id:string) => {
        const result = await this.connection("Card_wirecard")
        .select("*")
        .where({user_id:id})
        .and
        .where({number:number})

        return result[0]
    }


} 