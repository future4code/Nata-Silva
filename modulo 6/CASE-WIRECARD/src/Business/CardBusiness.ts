import { Request, Response } from "express";
import { CardData } from "../Data/CardData";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerate } from "../Services/IdGenerate.1";


const idGenerate = new IdGenerate()
const hashManager = new HashManager()
const autheticator = new Authenticator()
const cardData = new CardData()

export class CardBusiness {

    card = async (number:string, name:string, expiration:string, cvv:string, token:string) => {

        if(!number){
            throw new Error("Enter a number");  

        }else if(number.length != 16){
            throw new Error("the card number must be 16");
        }

        if(!name){
            throw new Error("Enter a name");     
        }

        if(!expiration){
            throw new Error("Enter an expiration, Ex: YYY/MM/DD");   
        }

        if(!cvv){
            throw new Error("Enter a cvv");

        }else if(cvv.length !== 3){
            throw new Error("The cvv must have 3 numbers");
        }

        if(!token){
            throw new Error("you must be logged to use the option credit card"); 
        }


        let today = new Date()
        let informedDate = new Date(expiration)
        let current = today.getTime()
        let expirationDate = informedDate.getTime()


        if(expirationDate < current){
            throw new Error("must be a future date!");
        }

        const hash = await hashManager.hash(cvv)

        const getTokenData = autheticator.getTokenData(token)
        const cardExist = await cardData.validateCard(number, getTokenData.id) 

        if(cardExist){
            throw new Error("The card already exist");    
        }


        await cardData.Card({
            id: idGenerate.generateId(),
            number: number,
            name: name,
            expiration: expiration,
            cvv: hash,
            userId: getTokenData.id
        })
    }



}