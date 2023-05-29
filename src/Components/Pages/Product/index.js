import React, { useEffect, useState } from 'react';
import './product.modules.css';
import { useParams } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi'
import { addRequest } from '../../../Connections/firebaseConfig';
import ModalCarrinho from '../../Layout/ModalCarrinho';

const Product = ({datas, userID}) => {
  
  const [data, setData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams()

  useEffect(() => {

    if(datas){
  
      if(Number(id) < datas.length){

        setData(datas[id])

      }else{

        window.location.href = "/"

      }
    }else{

      window.location.href = "/"

    }

  }, [])

  async function setDatas(){

    setShowModal(true)

    await addRequest(userID, data)

  }

  if(data == null){

    return (
    
      <FiLoader className="loading" size={"55%"}/>
      
    )

  }else{

   return (
    <div className="product-details">
     <div className='contentBox'>
      <div className="product-image">
        <img src={data.imagem} alt="Product" />
      </div>
      <div className="product-info">
        <h2 className="product-name">{data.nome}</h2>

        <h3 className='product-subtitle'> Descrição </h3>
        <p className="product-description">
          {data.descricao}
        </p>
        <h3 className='product-subtitle'> Ingredientes </h3>
        <p className="product-description">
          {data.ingredientes}
        </p>
        <p className="product-price">R$ {data.preco}</p>
        <button className="add-to-cart" onClick={setDatas}>Adicionar ao Carrinho</button>
      </div>
     </div>
     {showModal && <ModalCarrinho onClose={setShowModal}/>}
    </div>

   );

  }
};

export default Product;
