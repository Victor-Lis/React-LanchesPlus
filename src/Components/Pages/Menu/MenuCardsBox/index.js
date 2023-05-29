import React from 'react';
import MenuCard from './MenuCard';

export default function MenuCardsBox({datas, tipo}) {

 return (
   <>
    
    <h1> {tipo}s </h1>
    
    <div className="menu-cardsBox">

      {datas.map((data, index) => {

        if(data.tipo.toLowerCase() == tipo[0].toLowerCase()){

          return <MenuCard data={data} index={index} />

        }

      })}
    </div>
  </>
 );
}