//import Erro from '../Components/Erros/Erros';
import { Form, Button, Row } from 'react-bootstrap';

export default function Pedidos2() {

    const controleEnvio = () => { };
    return (

        <Row>
            <div className="col-lg-6 col-md-6 mx-auto p-5">
                <Form onSubmit={controleEnvio} method="POST" action="http://localhost/react-front/public/api/pedidos.php" >
                    <h4 className="text-center">Fazer Pedidos</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control /* onChange={controleMudanca}  */ type="text" name="nome_cliente" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control /* onChange={controleMudanca}  */ type="text" name="endereco" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control /* onChange={controleMudanca}  */ type="text" name="telefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control /* onChange={controleMudanca}  */ type="text" name="nome_produto" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control /* onChange={controleMudanca}  */ type="text" name="valor_unitario" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control /* onChange={controleMudanca}  */ type="text" name="quantidade" />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Preço Final:</Form.Label>
                        <Form.Control disabled type="text" name="valor_total" />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </div>

                </Form>
            </div>


        </Row>
    )
}