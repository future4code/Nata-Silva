import React from "react";  

export default class Etapa2  extends React.Component {
   
   render () {
    
    return (
      <div> 
        <h3> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h3> 
            <div>
                <p>5. Qual curso?</p>
                <input type={this.props.value} />

                <p>6. Qual a unidade de ensino?</p>
                <input type={this.props.value} />
            </div>
      </div>
    )
  }

}