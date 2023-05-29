import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenuCard({data, index}) {
 return (
  <div className="card">
    <img src={data.imagem} alt="Lanche 1" />
    <div className="main-card-content">
      <h3>{data.nome}</h3>
      <p>{data.descricao}</p>
      <p className="preco">R${data.preco}</p>
    </div>
    <Link to={`produto/${index}`} className="addPedido">
      Ver mais
    </Link>
  </div>
 );
}