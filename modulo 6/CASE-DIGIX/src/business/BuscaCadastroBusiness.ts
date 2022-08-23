import BuscaCadastro from "../data/BuscaCadastroData";


const buscaCadastro = new BuscaCadastro()

export default class BuscaCadastroBusiness {


    DetalhesCadastro = async (nome: string) => {
        if (!nome) {
            throw new Error("Digite o Nome cadastrado corretamente");''   
        }

        const BuscarCadastroDetalhado = await buscaCadastro.obterDetalhes(nome)

        return BuscarCadastroDetalhado
    }


    
}