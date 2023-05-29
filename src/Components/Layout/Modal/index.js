import React from 'react'
import { Link } from 'react-router-dom';
import "./modal.modules.css"

export default function Modal({onClose}) {    

    return (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Cadastro</h2>
            <p>Para prosseguir, é necessário fazer o cadastro / login.</p>
            <div className='modal-content-row'>

              <Link className="cta-button" to="/login" onClick={() => onClose(false)}>Ok</Link>
              <a className="cta-button" onClick={() => onClose(false)}>Fechar</a>

            </div>
          </div>
        </div>
      );
}
