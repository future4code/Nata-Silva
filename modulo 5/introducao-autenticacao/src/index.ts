import app from "./app"


// 1
    import { v4 } from "uuid"

    const id = v4();

    console.log("Generated Id: ", id);


    
    
    // A:
    // Ambas opções eu acho boa
    
    //B:
    export function generateId(): string {
        return v4();
    }



// 2


