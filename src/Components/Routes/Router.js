import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { getProductsDatas, getUserDatas } from '../../Connections/firebaseConfig'

import Nav from "../Layout/Nav";
import Home from "../Pages/Home";
import Menu from '../Pages/Menu';
import Product from "../Pages/Product";
import Carrinho from "../Pages/Carrinho";
import Error from '../Pages/Error';
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import UserDatas from "../Pages/UserDatas";

function Router() {

  const [userID, setUserID] = useState(null)
  const [produtos, setProdutos] = useState(null)
  const [userDatas, setUserDatas] = useState(null)

  async function getDatas(userId){

    let userInfos; 

    if(userId != null){
      userInfos = await getUserDatas(userId)
    }

    let datas = await getProductsDatas()

    setProdutos(datas)
    setUserDatas(userInfos)  

  }

  useEffect(() => {

    let userId = localStorage.getItem("@useruid")
    setUserID(userId)

    getDatas(userId)

  }, [])

  return (
    <BrowserRouter>     

     <div className="container">

      <Nav userID={userID}/>

      <Routes>
        <Route path="/" element={<Home datas={produtos != null?produtos : ""}/>}/>
        <Route path="/menu" element={<Menu datas={produtos != null?produtos : ""}/>}/>
        <Route path="/produto/:id" element={<Product datas={produtos != null?produtos : ""} userID={userID}/>}/>
        <Route path="/carrinho" element={<Carrinho userID={userID}/>}/>
        <Route path="/login" element={<Login userID={userID} setUserID={setUserID}/>}/>
        <Route path="/cadastro" element={<Cadastro userID={userID} setUserID={setUserID}/>}/>
        <Route path="/dados" element={<UserDatas userID={userID} setUserID={setUserID} />} />
        <Route path="*" element={<Error/>}/>
      </Routes>

     </div>

    </BrowserRouter>
  );
}

export default Router;