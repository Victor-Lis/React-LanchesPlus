import React, {useEffect} from 'react';

import Main from '../../Layout/Main';
import Footer from '../../Layout/Footer';

export default function Home({datas}) {

 return (
    <>
    
        {datas != undefined && <Main datas={datas}/>}
        <Footer/>

    </>
 );
}