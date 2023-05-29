import React from 'react';
import MainMenuCard from './MainMenuCard';

export default function MainMenu({datas}) {
 return (
    <section className="menu">
      <h2>Menu</h2>
      <div className='cardsBox'>
      {datas.map((data, index) => {

        if(index <= 10 && index >= 2){

            return <MainMenuCard key={index} data={data} index={index}/>

        }

       })}
       </div>
    </section>
 );
}