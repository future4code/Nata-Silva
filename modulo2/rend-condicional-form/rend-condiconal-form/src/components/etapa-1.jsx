import React from "react";  
import Etapa2 from "./etapa-2";




export default class Etapa1  extends React.Component {
    state = {
        paginas: ""
      };
   
      irPara2 = () => {
        this.setState({ paginas: "etapa-2" });
      };  


   render () {
    let proxPagina;
    switch (this.state.paginas) {
      case "etapa-2":
        proxPagina = <Etapa2/>;
        break;
    }



    return (
      <div> 
        <h3> ETAPA 1 - DADOS GERAIS </h3> 
            <div>
                <p>1. Qual o seu nome?</p>
                <input type={this.props.value} />
            </div>
            <div>
                <p>2. Qual sua idade?</p>
                <input type={this.props.value} />
            </div>
            <div>
                <p>3. Qual seu email??</p>
                <input type={this.props.value} />
            </div>

            <div>
                <p>4. Qual a sua escolaridade?</p>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select> 
            </div>

      </div>
    )
  }

}