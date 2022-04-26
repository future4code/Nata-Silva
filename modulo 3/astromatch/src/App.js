import {useState} from 'react';
import TelaPerfil from './components/TelaPerfil';
import TelaMatch from './components/TelaMatch'

function App() {
  const [telas, setTelas] = useState("TelaPerfil")


  const trocaTelas = () => {
    switch(telas){
      case 'TelaPerfil':
        return <TelaPerfil  irPraMatchs = {irPraMatchs}/>
      case 'TelaMatch':
        return <TelaMatch   irPraMatchs = {irPraMatchs}/>
      default:
        return <TelaPerfil  irPraMatchs = {irPraMatchs}/>
    }
}

const irPraMatchs = () => {
  setTelas("TelaMatch")
}

const irPraPerfil = () => {
  setTelas("TelaPerfil")
}


  return (
    <div>
      <button onClick={() => {irPraPerfil() }}>🏠</button>
      <button onClick={() => {irPraMatchs() }}>💌</button>
      {trocaTelas()}
    </div>
  );
}

export default App;
