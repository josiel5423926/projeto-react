//import { Container, Col} from 'react-bootstrap';
//import Logo from '../pages/logo.png';

import { lazy,Suspense} from 'react';


const Home2 = lazy(() => import('../Components/Home2/Home2.js'));
const Home3 = lazy(() => import('../Components/Home2/Home3.js'));

export default function Home() {
    return (
        <>
        <Suspense fallback={<h1 className="texter-center">Carregando...</h1>}> 
          <Home2 />
        </Suspense>


        <Suspense fallback={<h1 className="texter-center">Carregando...</h1>}> 
          <Home3 />
        </Suspense>
       </>
       
    )



}