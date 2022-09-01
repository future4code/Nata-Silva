import app from "../src/services/app"
import { ListaDeFamiliaBusiness } from "./business/ListaDeFamiliasBusiness"
import { MembrosFamiliaBusiness } from "./business/MembrosFamiliaBusiness"
import { PontuacaoDeFamiliaBusiness } from "./business/PontuacaoFamiliaBusiness"
import { BuscaCadastroController } from "./controller/BuscaCadastroController"
import { ListaDeFamiliaController } from "./controller/ListaDeFamiliaController"
import { MembrosDaFamiliaController } from "./controller/MembrosDaFamiliaController"
import { PontuacaoDeFamiliaController } from "./controller/PontuacaoFamiliaController"
import { ListaDeFamilias } from "./data/ListaDeFamiliasData"
import { MembrosDasFamilias } from "./data/MembrosDaFamiliaData"
import { PontuacaoFamilias } from "./data/PontuacaoData"
import { idGenerate } from "./services/idGenerate"

const familiaController = new ListaDeFamiliaController(
  new ListaDeFamiliaBusiness(
    new ListaDeFamilias(),
    new idGenerate(),

  )
)
const pontosController = new PontuacaoDeFamiliaController(
  new PontuacaoDeFamiliaBusiness(
    new PontuacaoFamilias(),
    new idGenerate(),

  )
)
const membrosController = new MembrosDaFamiliaController(
  new MembrosFamiliaBusiness(
    new MembrosDasFamilias(),
    new idGenerate(),

  )
)

const buscarCadastroController = new BuscaCadastroController ()




app.post("/cadastro", familiaController.adicionarFamilia)

app.post("/pontuacao", pontosController.PontuarFamilia)

app.post("/membros", membrosController.membrosFamilia)

app.get("/buscar",buscarCadastroController.pegarCadastro)




app.get("/ping", (req, res) => {
  res.send("Pong! 🏓")
})