import React, { useEffect } from 'react';
import "./maindestaque.modules.css"
import { Link } from 'react-router-dom';

export default function MainDestaque({data, index}) {

 return (
    <div className="destaque">
        <div className='imgBox'>

            <img src={data.imagem} alt={data.nome} />

        </div>
        <div className='row'>

            <h2>{data.nome}</h2>
            <p>{data.descricao}</p>

        </div>
        <Link to={`produto/${index}`}className="saiba-mais">
            Saiba Mais
        </Link>
    </div>
 );
}