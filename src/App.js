/* eslint-disable eqeqeq */
import React, {useState} from 'react';

//Css
import './App.css'

export default function App() {
 
  const [input,setInput] = useState([]);
  const [cep, setCep] = useState({});
    
    function handleResultado(){
    
    if (input == ''){
      alert('Preencher com o CEP ou Digitar CEP corretamente!!!')
      setInput('')
    }else{
    fetch(`https://viacep.com.br/ws/${input}/json`)
     .then(res => res.json())
     .then((resultado) => {
        setCep(resultado);
        setInput('');})
    }
 }
 
  return (
    <div className="body">
    <div className="conteiner">
        <h1 className="title">Buscando CEP</h1>
      <div className="search">
        <input
          type='text' 
          placeholder=' Digite CEP'
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btnSearch" onClick={handleResultado}>Search</button>
      </div>
    
    {Object.keys(cep).length > 0 && (
      <main className="main">
      
        <h2 className="titleTwo">Cep: {cep.cep}</h2>
        <span  className="span">Rua: {cep.logradouro ? cep.logradouro  : 'Sem dados a informar.'}</span>
        <span  className="span">Complemento: {cep.complemento ? cep.complemento : 'Sem dados a informar.'}</span>    
        <span  className="span">Bairro: {cep.bairro ? cep.bairro : 'Sem dados a informar.'}</span>
        <span  className="span">Cidade: {cep.localidade ? cep.localidade  : 'Sem dados a informar.'} - {cep.uf ? cep.uf  : 'Sem dados a informar.'}</span>
        
      </main>
    )}
    </div>
   </div>
  )
}

