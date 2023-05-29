import React from 'react';
import Lanche from '../../../../Images/Lanche.png'
import Refrigerante from '../../../../Images/Refrigerante.png'
import Acompanhamento from '../../../../Images/Acompanhamento.png'

export default function MenuDestaques() {
 return (
  <div className="menu-destaques">
    <div className="menu-destaque">
      <div className="imgBox">
        <img src={Lanche} alt="Lanches" />
      </div>
      <h2> Lanches </h2>
      {/* <button className="addPedido">Ver</button> */}
    </div>

    <div className="menu-destaque">
      <div className="imgBox">
        <img src={Refrigerante} alt="Refrigerante" />
      </div>
      <h2> Refrigerantes </h2>
      {/* <button className="addPedido">Ler mais</button> */}
    </div>

    <div className="menu-destaque">
      <div className="imgBox">
        <img src={Acompanhamento} alt="Acompanhamentos" />
      </div>
      <h2> Acompanhamentos </h2>
      {/* <button className="addPedido">Ler mais</button> */}
    </div>
  </div>
 );
}