import React, {useState, useEffect} from 'react';
import { getUserDatas, addMensagem } from '../../../../Connections/firebaseConfig';

export default function MainMensagem({userID}) {

    const [data, setData] = useState(null)
    const [hasId, setHasId] = useState(false)
    const [infos, setInfos] = useState({

        nome: "",
        email: "",
        mensagem: "",
        userID: "",

    })

    async function handleSubmit(){

        if(hasId){

            console.log(infos)
            if(infos.nome != "" && infos.email != "" && infos.mensagem != ""){

                addMensagem(userID, infos)

            }else{

                alert("Preencha os dados corretamente!")

            }

        }else{

            window.location.href = "/login"

        }

    }

    async function getUser(){

        let datas = await getUserDatas(userID)
        setData(datas)
        setInfos((prevProduct) => ({ ...prevProduct, nome: datas.nome }))
        setInfos((prevProduct) => ({ ...prevProduct, email: datas.email }))
        setInfos((prevProduct) => ({ ...prevProduct, userID: userID }))

    }

    useEffect(() => {

        let userid = localStorage.getItem("@useruid")

        if(!userID && !userid){

            setHasId(false)
    
        }else{
          
            setHasId(true)
            getUser()
    
        }
    
    }, [])
    
    useEffect(() => {
    
        if(userID){
    
            getUser()
    
        }
    
    }, [userID])   

 return (
    <section className="contato">
      <h2>Entre em Contato</h2>
      <div>
        <input value={data? data.nome: "Carregando..."} disabled={true}/>
        <input value={data? data.email: "Carregando..."} disabled={true}/>
        <textarea placeholder="Mensagem" value={infos.mensagem} onChange={text => setInfos((prevProduct) => ({ ...prevProduct, mensagem: text.target.value }))}/>
        <button type="submit" onClick={() => handleSubmit()}>Enviar</button>
      </div>
    </section>
 );
}