
import { useState, useEffect } from 'react';

import { Container, Row } from 'react-bootstrap';
import Produto from '../Components/Produto';


export default function Produtos() {

    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/josiel-projeto-loja/includes/api/produto.php");
        const dados = await resposta.json();
        console.log(dados);
        // setProdutos(dados);
    }, []);


    return (
        <Container>
            <Row>
                <Produto imagem="Kawasaki_1.jpg" nome="honda" descricao="Kawasaki " preco="20.000,00" preco_final="19.000,00" />
            </Row>
        </Container>

    )
}