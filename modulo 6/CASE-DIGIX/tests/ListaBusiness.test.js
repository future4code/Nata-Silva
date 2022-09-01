import { UserBusiness } from "../src/business/UserBusiness"
import { IdGeneratorMocks } from "./mocks/idGeneratorMocks"


const userBussinesMock = new UserBusiness(
    new IdGeneratorMocks(),
    new UserDatabaseMock(),

);

describe("teste de cadastro", () => {

    test("Erro quando retornar idade inválido", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.adicionarFamilia("idade" < "18");
        } catch (error) {
            expect(error.message).toBe("idade Inválida")
        }
    })

    test("Erro quando retornar um nome vazio", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.adicionarFamilia("", "25", "03596509106", "1000");
        } catch (error) {
            expect(error.message).toBe("nome invalido")
        }
    })

    test("Erro quando a renda for invalida", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.adicionarFamilia("renda_total" > "1500");
        } catch (error) {
            expect(error.message).toBe("renda inválida")
        }
    })

    test("Erro quando retornar um cpf for inválido", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.adicionarFamilia("fulano", "25", "", "1000");
        } catch (error) {
            expect(error.message).toBe("cpf invalido")
        }
    })

    test("Cadastrado com sucesso", async () => {
        expect.assertions(1)
        try {
            const token = await userBussinesMock.adicionarFamilia("fulano", "25", "03596509106", "1000");
            expect(token).toBe("Cadastro realizado com sucesso ")
        } catch (error) {

        }
    })

})


