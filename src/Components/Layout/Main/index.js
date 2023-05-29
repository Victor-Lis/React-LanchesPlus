import React from 'react';
import "./main.modules.css"
import MainDestaques from './MainDestaques';
import MainMenu from './MainMenu';
import { Link } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi'

export default function Main({datas}) {

 return (
  <main>
    <section className="banner">
      <div className="banner-content">
        <h1>Lanches+</h1>
        <p>Experimente nossos lanches incríveis!</p>
        <Link to="/menu" className="cta-button">Ver Menu</Link>
      </div>
    </section>
    {!datas && <FiLoader style={{margin: "5% 0"}} size={"50%"} className='loadingMain'/>}
    {datas && <MainDestaques datas={datas}/>}
    {datas && <MainMenu datas={datas}/>}
    <section className="contato">
      <h2>Entre em Contato</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>
 );
}