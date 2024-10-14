import React from 'react';
import "./modalqrcode.modules.css"

export default function ModalQRCode({onClose, img}) {
 return (
    <div className="modal-overlay">
        <div className="modal-content-qrcode">
            <h2>Pedido Gerado</h2>
            <p>Mostre o código abaixo a um vendedor.</p>
            <img src={img}/>
                <div className='modal-row' style={{marginTop: 20}}>

                    <a className="cta-button" onClick={() => onClose(false)}>Fechar</a>

                </div>
        </div>
    </div>
 );
}