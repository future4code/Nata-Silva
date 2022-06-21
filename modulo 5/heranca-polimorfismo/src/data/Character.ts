export default class Character {
    // dados privados só podem ser acessados internamente, garantindo mais segurança
    private name: string
    private movie: string
 
    // método construtor serve pra inicializar as variaveis. 
    // o preenchimento dos dados é obrigatório!
    constructor(name: string, movie:string) {
       this.name = name
       this.movie = movie
    }
 }
 
 
 