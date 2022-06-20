
// 1:

// a)   método construtor serve para inicializar as informações de uma classe
//
// b)    apareceu uma vez pois coloquei tudo em um objeto
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
    
    constructor(
        cpf: string,
        name: string,
        age: number,
        ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getCpf(){
        return this.cpf
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }


}

const UserAccount1 = new UserAccount ("112323", "natan", 19);
console.log(UserAccount1)

//c) classes privadas sao acessadas dentro da propria class por outras funções



// 2: 

class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

    getDate(){
        return this.date
    }
    getValue(){
        return this.value
    }
    getDescription(){
        return this.description
    }

  }



//3:
class Bank {
    private accounts: UserAccount[];
    
    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
    
    getAccount = () => {
        return this.accounts
    }
    
    setAccount = (account: UserAccount[]) => {
        this.accounts = account
    }
    
}
const newBank = new Bank ([UserAccount1])

  console.log(newBank.getAccount())
  




