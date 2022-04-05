import styled from 'styled-components';
import axios, { Axios } from 'axios';
import React from 'react';

const  Nomes = styled.div `
  display: ${(props) => props.mostrar === false ? 'none' : 'flex'};
  flex-direction: column;
`


const MainContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`






const headers = {
  headers: {
    Authorization: "nata-silva-shaw"
  }
}
class App extends React.Component {
  state = {
    user: [],
    inputNome: "",
    inputEmail: "",
    mostrar: false
  }

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }


  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    const url= "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.post(url, body, headers)
    .then((resposta) => {
      alert("Sucesso")
      this.getUser()
    }).catch((error) => {
      alert("Erro")
    })
  }


  getUser = () => {
    const url= "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, headers)
    .then((resposta) => {
      this.setState({
        user: resposta.data
      })
    })
  }


  deleteUser = (id) => {
    const url= `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, headers)
    this.getUser()
    // window.confirm("Tem certeza de que deseja deletar?")
  }

  trocarTela = () => {
    this.setState ({mostrar: !this.state.mostrar})
  }

  componentDidMount = () => {
    this.getUser()
  }
  render() {
    const componentesImput = this.state.user.map((resposta) => {
      return <li key={resposta.id}>  {resposta.name}  <button onClick={()=>this.deleteUser(resposta.id)}>Excluir</button> </li>
    })

    return (
      <MainContainer>
        <button onClick={this.trocarTela}> Ver Pessoas</button>
        <Nomes 
        mostrar = {this.state.mostrar}
        >
          {componentesImput}
        </Nomes>
        <br/>
        <label>
          Email:
          <input
            placeholder="ednaldo@exemplo.com"
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}
          />
        </label>
        <label>
          Nome:
          <input
            placeholder="Ednaldo Pereira"
            value={this.state.inputNome}
            onChange={this.onChangeNome}
            onKeyPress={event => {
              if (event.key === 'Enter' ) {
                this.createUser()
              }
            }}
          />
        </label>
        <br/>
        <button onClick={this.createUser}>Concluir</button>
      </MainContainer>
    );
  }
}
export default App;
