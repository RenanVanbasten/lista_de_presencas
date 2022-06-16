import React, {useState, useEffect, useReducer} from 'react'
import {Card} from '../../components/Card'
import {Footer} from '../../components/Footer'

const gh = new URL("github.png", import.meta.url);

import './styles.css'

function Home() {

  const [nomePresenca, setNomePresenca] = useState('');
  const [presencas, setPresencas] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddPresenca(){
    const novaPresenca ={
      image: user.avatar,
      name: nomePresenca,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    }

    setPresencas(prevState => [...prevState, novaPresenca])

  }

        //  NÃO CONSEGUI USAR O useEffect  !!!

  /*
useEffect(()=>{
  fetch(`https://api.github.com/users/${nomePresenca}`)
  .then(response => response.json())
  .then(data =>{
    setUser({
      name: data.name,
      avatar: data.avatar_url
    })
  })
}, [nomePresenca, presencas])*/
 
  const handleInput = (e) =>{
 
    if(e.keyCode === 13){
      e.preventDefault();
      const {value} = e.target;
      
      const url = `https://api.github.com/users/${value}`
  
      fetch(url)
      .then(response => response.json())
      .then(data =>{
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
   }
}

  return (
   <div className="container">

    <header>
    <h1>Presença de : {nomePresenca}</h1>
    <div>
      <img src={gh} alt="github_avatar" />
    </div>
    </header>
     
     <input type="text" id="input" placeholder='nome de usuário do github' 
      onKeyDown={handleInput}
      onChange={(e)=>setNomePresenca(e.target.value)}/>
     <button type="button" onClick={handleAddPresenca}>Adicionar</button>

    {
      presencas.map(presenca => <Card
         key={presenca.time}
         name={presenca.name} 
         time={presenca.time}
         image={presenca.image} />)
    }

<Footer />

   </div>
  )
}

export default Home
