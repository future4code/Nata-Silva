import { PostDatabase } from "../data/PostDatabase";
import { Post, POST_TIPO } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { PostInputDTO } from "../types/postInputDTO";

export class PostBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private postDatabase: PostDatabase,
        private authenticator: Authenticator
    ){}
    
    createPost = async (post: PostInputDTO) => {
        try {

            const { token, foto, descricao, tipo } = post
            let { data_criacao } = post

            if (!token) {
                throw new Error("Insira um token porfavor!")
            }

            const userTokenData = this.authenticator.getTokenData(token)

            if (!userTokenData) {
                throw new Error("Token inválido!")
            }

            if ( !descricao || !tipo ){
                throw new Error("Porfavor preencha todos os campos do body")
            }

            if (tipo !== POST_TIPO.NORMAL && tipo !== POST_TIPO.EVENTO) {
                throw new Error("Tipo inválido, preencha com os valores de NORMAL ou EVENTO")
            }

            if (!data_criacao) {
                data_criacao = new Date()
            }

            const postId = this.idGenerator.generate()

            const newPost = new Post(
                postId,
                foto,
                descricao,
                data_criacao,
                tipo,
                userTokenData.id  
            )

            await this.postDatabase.insertPost(newPost)

            return newPost
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getPostById = async (postId: string, token: string) => {
        try {

            if (!token) {
                throw new Error("Insira um token porfavor!")
            }

            if (!postId) {
                throw new Error("Insira um id de post!")
            }

            const userTokenData = this.authenticator.getTokenData(token)

            if (!userTokenData) {
                throw new Error("Token inválido!")
            }

            const post = await this.postDatabase.selectPostById(postId)

            if (!post) {
                throw new Error("Não existe nenhum post com esse ID!")
            }

            return post
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message) 
        }
    }
}