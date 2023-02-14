import React, { useState } from "react"
import { session } from "./session";
import './App.css';

function Home() {
  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()
  
  const entrar = () => {
    localStorage.setItem('usuario', usuario)
    localStorage.setItem('senha', senha)
    window.location.href = '/session'
  }

  return (
    <div className="container">
      <h1>Login</h1><br />
      <label>Usuario</label>
      <input onChange={(e) => setUsuario(e.target.value)} />

      <label>Senha</label>
      <input onChange={(e) => setSenha(e.target.value)} type='passoword' />
      <button onClick={() => entrar()}>Entrar</button>
    </div>
  )
}

export default Home;