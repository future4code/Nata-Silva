import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    private static TABLE_NAME = "labook_post_rec"
    
    insertPost = async (newPost: Post) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: newPost.getId(),
                    foto: newPost.getFoto(),
                    descricao: newPost.getDescricao(),
                    data_criacao: newPost.getDataCriacao(),
                    tipo: newPost.getTipo(),
                    criadorId_post: newPost.getCriadorIdPost()
                })
                .into(PostDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectPostById = async (postId: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(PostDatabase.TABLE_NAME)
                .where("id", postId)

            return result[0]
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)  
        }
    }
}