import {connection, User, performPurchase} from "../src"

describe("teste", ()=>{

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Natan",
            balance: 100
        }
    
        const result = performPurchase(user, 40)
        
        expect(result).toEqual({
            name: "Natan",
            balance: 60
        })
    })

})

describe("teste2", ()=>{
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Natan",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
})


describe("teste3", ()=>{
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Natan",
            balance: 30
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).not.toBeDefined()
    })
})

