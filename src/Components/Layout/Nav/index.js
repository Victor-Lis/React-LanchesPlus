import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { GoX } from 'react-icons/go'
import "./nav.modules.css"
import Modal from '../Modal';

export default function Nav({userID}) {

    const [showMenu, setShowMenu] = useState(true)
    const [showModal, setShowModal] = useState(false)

 return (
    <header>
    <nav style={!showMenu? {justifyContent: "center"}: {justifyContent: "space-between"}}>
      {showMenu && <div className="logo">Lanches<p style={{color: "red"}}>+</p></div>}
        
        {showMenu? (

          <FiMenu className="icon" onClick={() => setShowMenu(false)} size={30}/>

        ):(

        <ul className="navbar"> 
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            {userID != null?<Link to="/carrinho">Carrinho</Link>: <a onClick={() => setShowModal(true)}>Carrinho</a>}
          </li>
          <li>
            {userID != null?<Link to="/dados">Você</Link>: <a onClick={() => setShowModal(true)}>Você</a>}
          </li>
          <GoX className="icon" onClick={() => setShowMenu(true)} color="red" size={25}/>
          
          {showModal && <Modal onClose={setShowModal}/>}

        </ul>  

      )}
    </nav>
  </header>
 );
}