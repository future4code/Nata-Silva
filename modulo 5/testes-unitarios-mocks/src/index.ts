import knex from 'knex'
import { config } from 'dotenv'

config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   },
});

export interface Character {
   name: string;
   life: number;
   strength: number;
   defense: number;
 }

 export const validateCharacter = (input: Character): boolean => {
   if (
     !input.name ||
       input.life === undefined || 
     input.strength === undefined ||
     input.defense === undefined
   ) {
     return false;
   }
 
   if (input.life <=0 || input.strength <=0 || input.defense <=0) {
     return false;
   }
 
   return true;
 };

 
