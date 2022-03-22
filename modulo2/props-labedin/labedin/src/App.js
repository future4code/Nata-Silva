import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/cardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Serious&skinColor=Light" 
          nome="Natã Silva" 
          descricao="Oi, eu sou o Natã Silva. Sou estudante da Labenu. Adoro Tecnologia  e estudar sobre tecnologia."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/2026/2026596.png" 
          texto="Ver mais"
        />

      <CardPequeno
        imagem="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
        contato="natanlucas771@gmail.com"
      
      />
       <CardPequeno
        imagem="https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-4-1.png"
        contato="Caruaru - Pernambuco "
      
      />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Não Tenho expe
          riencias Profissionais" 
          descricao="" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Estudante Labenu" 
          descricao="Em Estudos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
        
         <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="LinkdIn" 
          />
      </div>
    </div>
  );
}

export default App;
