export class ListaMembrosDeFamilia {
    membrosdaFamilia: any
    constructor(
        private nome: string,
        private idade: number,
        private parentesco: string,
        private id_familia: string

    ) { }
}


export type MembrosFamilia = {
    nome: string,
    idade: number,
    parentesco: string,
    id_familia: string
}