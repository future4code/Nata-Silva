import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    img {
        width: 30px;
        margin-right: 1px;
        border-radius: 5%;
        margin-right: 20px; 
    };
`







function CardPequeno(props) {
    return (
        <Container>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.contato }</p>
            </div>
        </Container>
    )
}





export default CardPequeno;