import React from "react"
import CriarPlaylist from "./pages/CriarPlaylist";
import Playlists from "./pages/Playlists";
import styled,{createGlobalStyle} from "styled-components";
import VerPlaylist from "./pages/VerPlaylist";


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
`

export default class App extends React.Component {
  state = {
    telaAtual: "criarplaylist",
    idDaPlaylist: "",
    nomeDaPlaylist: "",
    listaDePlaylists: ""
  }


    irParaPlaylist = (id, name) => {
      this.setState({telaAtual: "playlist", idDaPlaylist: id , nomeDaPlaylist: name})
    }

    irCriarPLaylist = () => {
      this.setState({telaAtual: "criarplaylist", idDaPlaylist: "", nomeDaPlaylist: "" })
    }

    irParaVerPlaylist = (data) => {
      this.setState({telaAtual: "verplaylist", listaDePlaylists: data})
    }


  selecionarpagina = () => {
    switch (this.state.telaAtual) {
      case "verplaylist":
        return <VerPlaylist irCriarPLaylist={this.irCriarPLaylist} listaDePlaylists={this.state.listaDePlaylists}/>
      case "criarplaylist":
        return <CriarPlaylist irParaPlaylist={this.irParaPlaylist} irParaVerPlaylist={this.irParaVerPlaylist}/>
      case "playlist":
        return <Playlists irCriarPLaylist={this.irCriarPLaylist} irParaVerPlaylist={this.irParaVerPlaylist} id={this.state.idDaPlaylist} name={this.state.nomeDaPlaylist} />
        default: 
      return <CriarPlaylist/>
    }
  }

  render() {
    return (
      <div>
        <GlobalStyle/>
        {this.selecionarpagina()}
      </div>
    );
  }
}
