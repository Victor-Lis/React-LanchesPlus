import React, { useEffect } from "react";
import MenuDestaques from "./MenuDestaques";
import MenuCardsBox from "./MenuCardsBox";

import "./menu.modules.css";

function Menu({datas}) {

  useEffect(() => {

    if(datas == undefined){

      window.location.href = "/"

    }

  }, [])

  return (
    <main>
      <div className="banner">
        <div className="banner-content">
          <h1>Cardápio</h1>
          <p>Confira nossas deliciosas opções</p>
          {/* <a href="#" className="cta-button">
            Fazer Pedido
          </a> */}
        </div>
      </div>

        {datas && <MenuDestaques/>}

      <div className="menu">
        {datas && <MenuCardsBox datas={datas} tipo="Lanche"/>}
        {datas && <MenuCardsBox datas={datas} tipo="Acompanhamento"/>}
        {datas && <MenuCardsBox datas={datas} tipo="Refrigerante"/>}
      </div>
    </main>
  );
}

export default Menu;
