import React from "react"
import { voltar } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"

export default function Feed() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <img src="" />
                <button onClick={() => voltar(navigate)}> Logout </button>
            </div>

            <div>
                <textarea placeholder="Escreva Seu Post..."></textarea>
                <br/>
                <button>Postar</button>
            </div>

            <div>
                <p>posts</p>
                
            </div>
        </div>
    )
}