import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';



function BaseMenu(props) {
    const Location = props
    
    return (
        <Navbar className="navbar-dark" bg="primary" expand="lg" fixed="top">
            <Navbar.Brand>
                Full Stack Motos
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={Location.pathname} className="ml-auto mr-3">
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/">Página Inicial</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} href="/Produtos" to="/produtos">produtos</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} href="/Contato" to="/contato">contato</Nav.Link>
                    </Nav.Item>


                    <Nav.Item>
                        <Nav.Link as={Link} href="/Pedidos" to="/pedidos">pedidos</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} href="/Lojas" to="/lojas">lojas</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}
const Menu = withRouter(BaseMenu);
export default Menu;