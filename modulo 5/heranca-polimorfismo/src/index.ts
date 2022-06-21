import { userInfo } from "os";
import app from "./app"

// Herança 

// 1)

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }


     public interoduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`;
}
      
  }

  const User1 = new User ("11", "natan@gmai.com", "natan", "123456");
  console.log(User1)



// A: Não 

// B: Uma Vez, quando fiz a const User1




// 2)

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }

  }

  const Customer1 = new Customer ("11", "natan@gmai.com", "natan", "123456", "aa");

  console.log(Customer1)


  // A: A menagem foi impressa uma vez

  // B: Foi umpressa duas vezes, pelo Custumer e pelo User



// 3)

//A: Não, não se é imprimido imformacoes privadas 



// 4)

// console.log (User1.interoduceYourself())
// console.log ( Customer1.interoduceYourself())

// 5)

console.log (User1.interoduceYourself())
console.log ( Customer1.interoduceYourself())



//Polimorfismo


// 1)

