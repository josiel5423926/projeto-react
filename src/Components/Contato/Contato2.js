import { Container, Col} from 'react-bootstrap';
import Email from '../../pages/email.png';
import FormaPagamento from '../../pages/formas-de-pagamento.png';


export default function Contato2() {
    return (
        <Container className="text-center bg-light" fluid>

            <div className="py-4">
                <h1 className="py-4">Fale Conosco</h1>
            </div>
            
             <Col className="mx-auto my-5 row" sm={12} md={6} lg={6}>


             <div className="py-4 col-sm-6">
                <h4 className="py-4">Fullstackmotos@gmail.com</h4>
                <a href="/">
                    <img src={Email} width="150px" alt="&copy; Full Stack Motos" title="&copy; Full Stack Motos" className="shadow-sm bg-white rounded" />
                </a>
            </div>

            <div className="py-4 col-sm-6">
                <h4 className="py-4">(11) 9 5088-6634</h4>

                <a href="/">
                    <img src={FormaPagamento} width="200px" alt="&copy; Full Stack Motos" title="&copy; Full Stack Motos" className="shadow-sm bg-white rounded" />
                </a>
            </div>
            
                           
             </Col>

            

        </Container>
    )



}