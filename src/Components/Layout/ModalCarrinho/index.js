import React from 'react';
import "./modalcarrinho.modules.css"
import { Link } from 'react-router-dom';

export default function ModalCarrinho({onClose}) {
 return (
    <div className="modal-overlay">
        <div className="modal-content">
            <h2>Pedido Comprado</h2>
            <p>Para ver mais informações abra o carrinho, para isso aperte "Ok".</p>
                <div className='modal-row'>

                    <Link className="cta-button" to="/carrinho" onClick={() => onClose(false)}>Ok</Link>
                    <a className="cta-button" onClick={() => onClose(false)}>Fechar</a>

                </div>
        </div>
    </div>
 );
}