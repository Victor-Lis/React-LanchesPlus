import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi'
import "./login.modules.css"
import { logar } from '../../../Connections/firebaseConfig'

export default function Login({userID, setUserID}) {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(){

    if(email != "" && password != ""){

      let newEmail = email.replace(" ", "")
      newEmail = newEmail.toLowerCase()
      await logar(newEmail, password, setUserID)

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
    <div className="login">
      <h2 className="login-title">Login</h2>
      <div className="login-form">
        <input type="email" placeholder="Email" onChange={text => setEmail(text.target.value)}/>
        <div className='cadastro-row'>

          <input type={showPassword? "text" :"password"} placeholder={showPassword? "Senha" :"•••••"} onChange={text => setPassword(text.target.value)}/>
          <div className='iconBox'>

            {showPassword? <FiEye onClick={() => setShowPassword(!showPassword)} color='rgba(0,100,255,1)' size={"85%"}/>: <FiEyeOff onClick={() => setShowPassword(!showPassword)} color='rgba(0,100,255,1)' size={"85%"}/>}

          </div>

        </div>
        <button className="login-button" onClick={handleSubmit}>Entrar</button>
        <p className='cadastro-text'> Não tem conta?  <Link to="/cadastro"> Clique aqui! </Link> </p>
      </div>
    </div>
  );
};