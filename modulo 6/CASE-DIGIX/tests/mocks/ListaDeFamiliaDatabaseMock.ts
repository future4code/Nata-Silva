import { ListaDeFamilia } from "../../src/models/ListaDeFamilia"


export class ListaDeFamiliasMock {

    public async adicionarFamilia(user: ListaDeFamilia): Promise<void> {
        
    }

    public async selecionarUsuarioPeloNome(nome: string): Promise<ListaDeFamilia | undefined> {
        switch (nome) {
            case "user1@gmail.com":
                return 
            default:
                return undefined
        }
    }
}