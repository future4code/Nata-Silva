import React, { useState, useEffect } from "react"
import { voltar } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useForms } from "../hooks/useForms";
import { CardFeed } from "../components/CardFeed";
import { useProtectedPage } from "../hooks/useProtect";
import { Box, Button, TextField } from "@mui/material";
import {postRequest, getRequest, botaoLike, botaoDeslike} from "../services/requests";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

export default function Feed() {
    useProtectedPage()

    const navigate = useNavigate()
    const [post, setPost] = useState([])
    const [form, onChange, clean] = useForms({ titulo: "", body: "" })

    const deslogar = () => {
        window.localStorage.removeItem('token')
        navigate("/")
    }

    const criarPosts = () => {
        const body = {
            "title": form.titulo,
            "body": form.body
        }
        postRequest("posts", body, setPost)
        

    }

    const pegarPosts = () => {
        getRequest("posts", setPost)
    }

    useEffect(() => {
        pegarPosts()
    }, [])



    return (
        <div>
            <div>
                <img src="" />
                <button onClick={deslogar}> Logout </button>
            </div>

            <Box component={"form"} onSubmit={criarPosts}>
                <TextField
                    placeholder="Titulo do Post"
                    value={form.titulo}
                    onChange={onChange}
                    name="titulo"
                ></TextField>
                <br />
                <TextField
                    placeholder="Escreva Seu Post..."
                    value={form.body}
                    onChange={onChange}
                    name="body"
                ></TextField>
                <br />
                <Button type="submit" sx={{ "&:hover": { backgroundColor: "#439ea1", color: "black" } }} > Postar </Button>
                <p>________________________________</p>
            </Box>

            <div>
                {post.map((post) => {
                    return (
                        <div>
                            <CardFeed
                                username={post.username}
                                title={post.title}
                                body={post.body}
                                voteSum={post.voteSum}
                                commentCount={post.commentCount}
                                id={post.id}
                            />
                            <ArrowUpwardOutlinedIcon 
                            sx={{ color: post.userVote == 1 ? "green" : "black"}} 
                            onClick={() => botaoLike(post.userVote, post.id, "posts", setPost, "posts")}
                            >like</ArrowUpwardOutlinedIcon>
                            <ArrowDownwardOutlinedIcon 
                            sx={{ color: post.userVote == -1 ? "red" : "black"}} 
                            onClick={() => botaoDeslike(post.userVote, post.id, "posts", setPost, "posts")}
                            >deslike</ArrowDownwardOutlinedIcon>
                            <br /><br /><br />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}