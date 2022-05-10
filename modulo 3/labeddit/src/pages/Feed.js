import React, { useState, useEffect } from "react"
import { voltar } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useForms } from "../hooks/useForms";

export default function Feed() {
    const [post, setPost] = useState([])
    const navigate = useNavigate()
    const [form, onChange] = useForms({ titulo: "", body: "" })


    const criarPosts = () => {
        const url = "https://labeddit.herokuapp.com/posts"
        const body = {
            "title": form.titulo,
            "body": form.body
        }
        const token = window.localStorage.getItem('token')
        const headers = {
            Authorization: token
        }
        axios
            .post(url, body,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then((res) => {
               pegarPosts()
            })
            .catch((err) => { console.log(err.response) })
        
    }


    const pegarPosts = () => {
        const url = "https://labeddit.herokuapp.com/posts"
        const token = window.localStorage.getItem('token')

        axios
            .get(url, {
                headers: {
                    Authorization: token
                }
            })
            .then((res) => {
                setPost(res.data)
                console.log(res.data)
            })
            .catch((err) => { console.log(err.response.data) })
    }

    useEffect(() => {
        pegarPosts()
    }, [])

    return (
        <div>
            <div>
                <img src="" />
                <button onClick={() => voltar(navigate)}> Logout </button>
            </div>

            <div>
                <input placeholder="Titulo do Post"
                    value={form.titulo}
                    onChange={onChange}
                    name="titulo"
                ></input>
                <br />
                <textarea placeholder="Escreva Seu Post..."
                    value={form.body}
                    onChange={onChange}
                    name="body"
                ></textarea>
                <br />
                <button onClick={() => criarPosts()} >Postar</button>
                <p>________________________________</p>
            </div>

            <div>
                {post.map((post) => {
                    return (
                        <div>

                            <p>Eviado Por:{post.username}</p>
                            <h3>{post.title}</h3>
                            <li>{post.body}</li>
                            <button> ↕{post.voteSum} </button>
                            <button>Comentarios: {post.commentCount}</button>
                            <br /><br /><br />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}