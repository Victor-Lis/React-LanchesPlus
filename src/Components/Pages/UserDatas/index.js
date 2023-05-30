import React, {useEffect, useState} from 'react';
import { getUserDatas } from '../../../Connections/firebaseConfig';
import "./userdatas.modules.css"
import { Link } from 'react-router-dom';

export default function UserDatas({userID, setUserID}) {

    const [data, setData] = useState(null)
    const [mensagens, setMensagens] = useState(null)

    async function getUser(){

        let datas = await getUserDatas(userID)
        setData(datas)
        setMensagens(Object.values(datas.mensagens))
        mensagens.map(msg => console.log(msg.mensagem))

    }

    useEffect(() => {

        let userid = localStorage.getItem("@useruid")

        if(!userID && !userid){

            window.location.href = "/login"

        }else{

            getUser()

        }

    }, [])

    useEffect(() => {

        if(userID){

            getUser()   
      
        }
      

    },[userID])

    return (
        <div className="datas-details">
        <div className='datas-contentBox'>
         {/* <div className="datas-image">
           <img src={data.imagem} alt="Data" />
         </div> */}
         <div className="datas-info">
           {/* <h2 className="datas-name">data.nome</h2> */}
   
           <h3 className='datas-subtitle'> Nome </h3>
           <p className="datas-description">
             {data? data.nome: "Carregando..."}
           </p>

           <h3 className='datas-subtitle'> Email </h3>
           <p className="datas-description">
             {data? data.email: "Carregando..."}
           </p>
           <h3 className='datas-subtitle'> Senha </h3>
           <p className="datas-description">
            {data? data.senha: "Carregando..."}
           </p>
         </div>
         <Link className='signout' to={`/`} onClick={() => {
            localStorage.clear()
            setUserID(null)
         }}>

            Deslogar

         </Link>

{/*     <div className='datas-info'>

          <h3 className='datas-subtitle' style={{width: "125%"}}> Mensagens </h3>

          {mensagens && mensagens.length > 0? (

            mensagens.map((mensagem) => {

              return (<p className="datas-description">
            
                {mensagem.mensagem}

              </p>)

            })

          ):(

            <p className="datas-description">
            
              Não há mensagens ainda!

            </p>
            
          )}

        </div> */}
       </div>
      </div>
    );
}