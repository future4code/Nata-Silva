import React from "react";
import styled from "styled-components"


const MainContainer = styled.div`
background-color: black;
width: 100vw ;
height: 100vh ;
display: flex;
justify-content: center;

`
const Mensagem = styled.div`
  background-image:url(https://i.pinimg.com/originals/8e/6b/e9/8e6be91a01ba06f18b9eddfb944b2b42.jpg) ;
  height: 99.5vh;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  border: 1px solid black ;
`
const Zap = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
spam {
  font-weight: bold;
}
`

const Botoes = styled.div `
display: flex;

button {
  background-color: #008B8B;
}
`




const NomeInput = styled.input `
background-color:#2F4F4F;
width: 100px;
`
const MsgInput = styled.input `
background-color:#2F4F4F;
width: 56vh;
`

class Whatslab extends React.Component {
  state = {
    chat: [],
    valorInputNome: "",
    valorInputMSG: "",
    onclick: false
  };

  adicionaPessoa = () => {
    const novaPessoa = {
      nome: this.state.valorInputNome,
      msg: this.state.valorInputMSG
    };

    const novoPessoas = [...this.state.chat, novaPessoa];

    this.setState({ chat: novoPessoas, onclick:true,  valorInputMSG: ""});
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMSG = (event) => {
    this.setState({ valorInputMSG: event.target.value });
  };

  render() {
    let listaDeComponentes
    if (this.state.onclick) {
        listaDeComponentes = this.state.chat.map((pessoa) => {
      return (
        <div>
          <spam>{pessoa.nome}</spam>:  {pessoa.msg}
        </div>
      );
    });
    }
  

    return (
      <MainContainer>
        <Mensagem>
          <Zap>{listaDeComponentes}</Zap>
          <Botoes>
            <NomeInput
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
            />
            <MsgInput
              value={this.state.valorInputMSG}
              onChange={this.onChangeInputMSG}
              placeholder={"Mensagem..."}
            />
            <button onClick={this.adicionaPessoa}>Enviar</button>
          </Botoes>
        </Mensagem>
      </MainContainer>
    );
  }
}

export default Whatslab;
