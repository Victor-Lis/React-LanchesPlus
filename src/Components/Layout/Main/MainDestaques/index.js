import React from 'react'
import "./maindestaques.modules.css"
import MainDestaque from './MainDestaque'

export default function MainDestaques({datas}) {

  let lanches = 0

  return (
    
    <section className="destaques">
    {datas.map((data, index) => {

        if(data.tipo == "L" && lanches<3){

          lanches++
          return <MainDestaque key={index} data={data} index={index}/>

        }

    })}
    </section>

  )
}
