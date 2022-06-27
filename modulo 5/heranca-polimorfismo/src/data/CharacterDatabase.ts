import knex from "knex";
import dotenv from "dotenv"
import Character from "./Character";

dotenv.config() 

export default class CharacterDatabase {
    // agora o knex fica aqui dentro
    // juntando todas as infos referentes a Character em um só lugar

    private connection = knex({
        client: "mysql",
        connection: {
           host: process.env.DB_HOST,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           database: process.env.DB_SCHEMA,
           port: 3306,
           multipleStatements: true
        }
     })


        //  método responsável por recuperar todos os dados
     async getAllCharacters() {
        try {
           const characters = await this.connection('character').select("*")
           return characters 
        } catch(error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
     }
        //  método responsável por criar um novo Character. Repare que recebe o character do "type"
        // Character. Aqui a class Character é usada tal qual um type. 

     async createCharacter(character: Character) {
        try {
            await this.connection("character").insert(character)
        } catch(error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
     }
     



}