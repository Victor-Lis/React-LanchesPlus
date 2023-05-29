import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { cadastrar } from '../../../Connections/firebaseConfig'
import "./cadastro.modules.css"

export default function Cadastro({userID, setUserID}) {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  async function handleSubmit(){

    if(nome != "" && email != "" && password != "" && password == password2){

      let newEmail = email.replace(" ", "")
      newEmail = newEmail.toLowerCase()
      cadastrar(newEmail, password, setUserID, nome)

    }else{

      alert("Os dados não podem ser vazios e as senhas tem que ser iguais!")

    }

  }

  useEffect(() => {

    if(userID != null){

      window.location.href = "/"

    }

  }, [userID])

  return (
    <div className="cadastro">
      <h2 className="cadastro-title">Cadastrar</h2>
      <div className="cadastro-form">
        <input type="email" placeholder="Nome" onChange={text => setNome(text.target.value)}/>
        <input type="email" placeholder="Email" onChange={text => setEmail(text.target.value)}/>
        <div className='cadastro-row'>
          <input type={showPassword? "text" :"password"} placeholder={showPassword? "Senha" :"•••••"} onChange={text => setPassword(text.target.value)}/>
          <div className='iconBox'>

            {showPassword? <FiEye onClick={() => setShowPassword(!showPassword)} color='rgba(0,100,255,1)' size={"85%"}/>: <FiEyeOff onClick={() => setShowPassword(!showPassword)} color='rgba(0,100,255,1)' size={"85%"}/>}

          </div>
        </div>
        <div className='cadastro-row'>
          <input type={showPassword2? "text" :"password"} placeholder={showPassword2? "Confirme a senha" :"•••••"} onChange={text => setPassword2(text.target.value)}/>
          <div className='iconBox'>

            {showPassword2? <FiEye onClick={() => setShowPassword2(!showPassword2)} color='rgba(0,100,255,1)' size={"85%"}/>: <FiEyeOff onClick={() => setShowPassword2(!showPassword2)} color='rgba(0,100,255,1)' size={"85%"}/>}

          </div>
        </div>
        <button className="cadastro-button" onClick={handleSubmit}>Cadastrar</button>
        <p className='cadastro-text'> Já tem conta?  <Link to="/login"> Clique aqui! </Link> </p>
      </div>
    </div>
  );
};