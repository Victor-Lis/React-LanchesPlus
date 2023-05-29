import React from 'react';
import { deleteAtributte } from '../../../../Connections/firebaseConfig'

export default function CartItem({data, userID, index, setProdutos, setTotal, total}) {

    async function deleteItem(){

        setTotal(total - data.preco)
        let newProdutos = await deleteAtributte(index, userID)
        setProdutos(newProdutos)

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