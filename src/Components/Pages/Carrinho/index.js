import React, { useEffect, useState } from 'react';
import './carrinho.modules.css';
import CartItem from './CartItem';
import { getProduct } from '../../../Connections/firebaseConfig'

function Carrinho({userID}){

  let total = 0;
  const [produtos, setProdutos] = useState(null)

  async function finish(){

    // const objetoString = JSON.stringify(produtos)

    // const objetoCodificado = btoa(objetoString)

    // const url = await `https://api.qrserver.com/v1/create-qr-code/?data=${objetoCodificado}`;

    // console.log(url)

    alert("Este botão não faz nada ainda...")

  }

  async function getDatas(){

    setProdutos([])
    let datas = await getProduct(userID)
    setProdutos(datas)

  }

  useEffect(() => {

    let userid = localStorage.getItem("@useruid")

    if(!userID && !userid){

      window.location.href = "/login"

    }else{
      
      getDatas()

    }

  }, [])

  useEffect(() => {

    if(userID){

      getDatas()

    }

  }, [userID])

  return (
    <div className="cart">
      <h2 className="cart-title">Carrinho de Compras</h2>
      <ul className="cart-items">

        {produtos && produtos.length > 0? (produtos.map((produto, index) => {

          total+=Number(produto.preco)
          return <CartItem key={index} data={produto} index={index} userID={userID} getDatas={getDatas} produtos={produtos} setProdutos={setProdutos} total={total}/>

        })):(

          <li className="cart-item">
          
            <h3> Você não tem pedidos! </h3>

          </li>

        )}
        
      </ul>
      <div className="cart-total">
        <p>Total: R${total}</p>
        <button className="checkout" onClick={() => finish()}>Finalizar Pedido</button>
      </div>
    </div>
  );
};

export default Carrinho;
