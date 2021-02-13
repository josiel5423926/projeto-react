import { Container, Col} from 'react-bootstrap';
import Logo from './logo.png';

export default function Home() {
    return (
        <Container className="text-center bg-light" fluid>

            <div className="py-4">
                <h1 className="py-4">Seja Bem-vindo</h1>
            </div>
            
             <Col className="mx-auto my-5" sm={12} md={6} lg={6}>
                            <a href="/">
                                <img src={Logo} width="300px" alt="&copy; Full Stack Motos" title="&copy; Full Stack Motos" className="shadow-sm bg-white rounded" />
                            </a>
             </Col>

            

        </Container>
    )



}