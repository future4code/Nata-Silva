import { POST_TIPO } from "../model/Post"

export type PostInputDTO = {
    foto: string
    descricao: string
    data_criacao: Date
    tipo: POST_TIPO
    token: string
}