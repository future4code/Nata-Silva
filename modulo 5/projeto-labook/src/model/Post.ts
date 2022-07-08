export enum POST_TIPO {
    NORMAL = "NORMAL",
    EVENTO = "EVENTO"
}

export class Post {
    constructor(
        private id: string,
        private foto: string,
        private descricao: string,
        private data_criacao: Date,
        private tipo: POST_TIPO,
        private criadorId_post: string
    ) {}

    getId = () => {
        return this.id
    }

    getFoto = () => {
        return this.foto
    }

    getDescricao = () => {
        return this.descricao
    }

    getDataCriacao = () => {
        return this.data_criacao
    }

    getTipo = () => {
        return this.tipo
    }

    getCriadorIdPost = () => {
        return this.criadorId_post
    }

    
}