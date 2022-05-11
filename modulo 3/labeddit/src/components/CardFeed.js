import { useNavigate } from "react-router-dom"
import { goToPostPage } from "../routes/coordinator"
import styled from "styled-components"

const MainContainer = styled.div `
cursor: pointer;
background-color: dargray;
margin-bottom: 5px;
`

export const CardFeed = (props) => {
   const  navigate = useNavigate()



    return (
        <MainContainer onClick={()=>goToPostPage(navigate, props.id)}>
            <p>Eviado Por: {props.username}</p>
            <h3>{props.title}</h3>
            <li>{props.body}</li>
            <button> ↕ {props.voteSum} </button>
            <button>Comentarios: {props.commentCount}</button>
            <br /><br /><br />
        </MainContainer>
    )
}
