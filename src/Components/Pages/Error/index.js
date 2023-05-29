import React from 'react'
import { AiOutlineFrown } from 'react-icons/ai'
import "./error.modules.css"

export default function Error() {
  return (
    <div className="error-container">
      <AiOutlineFrown color='#fff' size={'30%'} className='error-img'/>
      <h1 className="error-heading">Erro 404</h1>
      <p className="error-message">
        Desculpe, a página que você está procurando não foi encontrada.
      </p>
    </div>
  )
}
