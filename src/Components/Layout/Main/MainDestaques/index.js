import React from 'react'
import "./maindestaques.modules.css"
import MainDestaque from './MainDestaque'

export default function MainDestaques({datas}) {

  return (
    
    <section className="destaques">
    {datas.map((data, index) => {

        if(index < 2 && data.tipo == "L"){

            return <MainDestaque key={index} data={data} index={index}/>

        }

    })}
    </section>

  )
}
