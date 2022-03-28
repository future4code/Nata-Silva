import React from "react";
import logo from './logo.svg';
import './App.css';
import Etapa1 from "./components/etapa-1";
import Etapa2 from "./components/etapa-2";
import Etapa3 from "./components/etapa-3";
import Final from "./components/final";
import styled from "styled-components";


const MainContainer = styled.div `
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    button {
      margin-top: 20px;
    }

`


export default class App extends React.Component {
  
  state = {
    paginas: "etapa-1"
  };

    irParaProx = () => {
      if (this.state.paginas === "etapa-1") {
        this.setState({ paginas: "etapa-2" });
      }else if (this.state.paginas === "etapa-2") {
        this.setState({ paginas: "etapa-3" });
      }else if (this.state.paginas === "etapa-3"){
        this.setState({ paginas: "final" });
      }else {
        this.setState({ paginas: "etapa-1" });
      }
    };

  render () {
    let proxPagina;
    switch (this.state.paginas) {
      case "etapa-1":
        proxPagina = <Etapa1 />;
        break;
      case "etapa-2":
        proxPagina = <Etapa2 />;
        break;
      case "etapa-3":
        proxPagina = <Etapa3 />;
        break;
      default:
        proxPagina = <Final />
      
    
    }


    return (
        <MainContainer>
          {proxPagina}
          <button onClick={this.irParaProx} > Proxima etapa </button>
        </MainContainer>
    )
  }


}
