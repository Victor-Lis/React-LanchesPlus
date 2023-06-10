import React, { useEffect } from 'react';
import { deleteAtributte } from '../../../../Connections/firebaseConfig'

export default function CartItem({data, userID, index, produtos, setProdutos, total, getDatas}) {

    async function deleteItem(){

        total-= Number(data.preco)
        await deleteAtributte(index, userID)
        getDatas()

    }

 return (
    <li className="cart-item">
        <div className="cart-item-image">
            <img src={data.imagem} alt={`${data.nome}`} />
        </div>
        <div className="cart-item-info">
            <h3 className="cart-item-name">{data.nome}</h3>
            <p className="cart-item-description">
                {data.descricao}
            </p>
            <p className="cart-item-price">R${data.preco}</p>
        </div>
        <button className="remove-from-cart" onClick={deleteItem}>Remover</button>
    </li>
 );
}