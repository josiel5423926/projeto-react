
import { useState, useEffect } from 'react';

import { Container, Row } from 'react-bootstrap';
import Produto from '../Components/Produto';


export default function Produtos() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost/fullstackmotos/public/api/produto.php?table=produto");
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
    }, []);


    return (
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto imagem={item.imagem} nome={item.categoria} descricao={item.descricao} preco={item.preco} preco_final={item.preco_final} />)}
            </Row>
        </Container>

    )
}