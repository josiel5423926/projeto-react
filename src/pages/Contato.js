import { Container, Col} from 'react-bootstrap';
import Logo from './logo.png';


export default function Contato() {
    return (
        <Container className="text-center bg-light" fluid>

            <div className="py-4">
                <h1 className="py-4">Fale Conosco</h1>
            </div>
            
             <Col className="mx-auto my-5" sm={12} md={6} lg={6}>
                            <a href="/">
                                <img src={Logo} width="150px" alt="&copy; Full Stack Motos" title="&copy; Full Stack Motos" className="shadow-sm bg-white rounded" />
                            </a>
                            <a href="/">
                                <img src="./logo.png" width="150px" alt="&copy; Full Stack Motos" title="&copy; Full Stack Motos" className="shadow-sm bg-white rounded" />
                            </a>
             </Col>

            

        </Container>
    )



}