import React from "react"
import CriarPlaylist from "./pages/CriarPlaylist";
import Playlists from "./pages/Playlists";

export default class App extends React.Component {
  state = {
    telaAtual: "criarplaylist",
    idDaPlaylist: ""
  }
    irParaPlaylist = (id) => {
      this.setState({telaAtual: "playlist", idDaPlaylist: id })
    }

    irCriarPLaylist = () => {
      this.setState({telaAtual: "criarplaylist", idDaPlaylist: "" })
    }

  selecionarpagina = () => {
    switch (this.state.telaAtual) {
      case "criarplaylist":
        return <CriarPlaylist irParaPlaylist={this.irParaPlaylist}/>
      case "playlist":
        return <Playlists irCriarPLaylist={this.irCriarPLaylist} id={this.state.idDaPlaylist} />
        default: 
      return <CriarPlaylist irParaPlaylist={this.irParaPlaylist}/>
    }
  }

  render() {
    return (
      <div>
        {this.selecionarpagina()}
      </div>
    );
  }
}
