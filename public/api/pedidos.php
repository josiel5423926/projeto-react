<?php
require ( "./conexao.php");

if (
    isset($_POST['nome_cliente']) && isset($_POST['endereco']) && isset($_POST['telefone']) &&
     isset($_POST['valor_unitario']) && isset($_POST['quantidade']) //&&
 
) {
    $nome_cliente = $_POST['nome_cliente'];
    $endereco = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $nome_produto = $_POST['nome_produto'];
    $valor_unitario = $_POST['valor_unitario'];
    $quantidade = $_POST['quantidade'];
    $valor_total = $_POST['valor_total'];
    


$sql = "insert into tb_pedido (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
 values
 ('$nome_cliente',' $endereco', ' $telefone','$nome_produto', '$valor_unitario', '$quantidade','$valor_total')";


$result = $conexao->query($sql);
header("Refresh: 0;url=http://localhost:3000/Produtos");

}

?>

 