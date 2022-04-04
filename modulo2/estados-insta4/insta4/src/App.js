
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`




class App extends React.Component {

  state = {
    pessoas: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },

      {
        nomeUsuario: 'João',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151',
      },

      {
        nomeUsuario: 'Pedro',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152',
      }
    ],

    nomeUsuario: '',
    fotoUsuario: '',
    fotoPost: '',

  }

  onChangeNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };
  onChangeFotoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };
  onChangeFotoPost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  adicionaPessoa = () => {
  const novaPessoa = {
    nomeUsuario:  this.state.nomeUsuario,
    fotoUsuario:  this.state.fotoUsuario,
    fotoPost:     this.state.fotoPost
  }
  
  const novoPessoas = [...this.state.pessoas, novaPessoa];

  this.setState({ pessoas: novoPessoas });
  this.setState({ nomeUsuario: '', fotoUsuario: '', fotoPost: ''});
  }





  render() {

    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <Post
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        {listaDeComponentes}

        <input
            value={this.state.nomeUsuario}
            onChange={this.onChangeNomeUsuario}
            placeholder={"Natã"}
        />
        <input
            value={this.state.fotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder={"foto.jpg"}
        />
        <input
            value={this.state.fotoPost}
            onChange={this.onChangeFotoPost}
            placeholder={"FotoPost.png"}
        />
        <button onClick={this.adicionaPessoa}>Adicionar</button>
      </MainContainer>
    );
  }
}

export default App;


