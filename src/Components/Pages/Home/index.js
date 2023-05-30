import React, {useEffect} from 'react';

import Main from '../../Layout/Main';
import Footer from '../../Layout/Footer';

export default function Home({datas, userID}) {

 return (
    <>
    
        {datas != undefined && <Main datas={datas} userID={userID}/>}
        <Footer/>

    </>
 );
}