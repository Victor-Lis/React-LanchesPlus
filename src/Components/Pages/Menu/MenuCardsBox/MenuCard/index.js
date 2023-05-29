import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuCard({data, index}) {
 return (
    <div className="menu-card">
        <img src={data.imagem} alt={`${data.nome}`} />
        <div className="menu-card-content">
            <h3>{data.nome}</h3>
            <p className='menu-description'>{data.descricao}</p>
            <p className="preco">R${data.preco}</p>
            <Link className="addPedido" to={`/produto/${index}`} >Ler mais</Link>
        </div>
    </div>
  );
}