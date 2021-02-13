import { Container, Row, Col, Image, } from 'react-bootstrap';
import './Footer.css';
import logo from '../../pages/logo.png';


export default function Footer() {
    return (

        <>
            <footer className="bg-info text-white py-1 link-white">
                <Container>
                    <Row className="text-center">
                        <Col className="my-auto" sm={12} md={3} lg={3}>
                            <a href="/">
                                {<Image src={logo} title="© 2021 Full Stack Motos" className="w-50 shadow-sm bg-white rounded" fluid />}
                            </a>
                        </Col>

                        <Col className="my-auto" sm={12} md={3} lg={3}>

                            <ul className="m-auto">
                                <li className="h2 pb-2 font">Inicio</li>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/Produtos">Produtos</a>
                                </li>
                                <li>
                                    <a href="/Pedidos">Carrinho</a>
                                </li>
                            </ul>
                        </Col>

                        <Col className="my-auto" sm={12} md={3} lg={3}>

                            <ul className="m-auto">
                                <li className="h2 pb-2 font">Sobre Nós</li>
                                <li>
                                    <a href="/Lojas">Nossas Lojas</a>
                                </li>
                                <li>
                                    <a href="/Contato">Fale Conosco</a>
                                </li>
                               
                            </ul>
                        </Col>

                        <Col className="m-auto" sm={12} md={3} lg={3}>
                            <div>
                                <a href="https://github.com/josielsouza/projeto-react.js/tree/react-front-avancado" target="_blank" rel="noopener noreferrer" title="GitHub" className="github"><i
                                    className="fa fa-3x mx-2 fa-github text-light"></i></a>
                                <a href="https://www.linkedin.com/in/josiel-souza/" target="_blank" rel="noopener noreferrer" title="Linkedin" className="linkedin"><i
                                    className="fa fa-3x mx-2 fa-linkedin text-light"></i></a>
                                
                            </div>
                        </Col> 

                    </Row>
                </Container>
            </footer>
            <div className="bg-dark text-center text-white py-2 font" title="&copy; 2021 Full Stack Motos">
                &copy; 2021 Full Stack Motos
            </div>
        </>

    )
}