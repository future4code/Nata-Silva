export class ListaDeFamilia {
     constructor(
          private id: string,
          private nome: string,
          private idade: number,
          private cpf: string,
          private renda_total: number
     ) { }
}


export type DadosFamilia = {
     nome: string,
     idade: number,
     cpf: string,
     renda_total: number
}

