export type PontosFamilia = {
    pontos: number,
    id_familia: string,

}


export class ListaPontuarDeFamilia {
    constructor(
        private id_familia: string,
        private pontos: number,

    ) { }
}
