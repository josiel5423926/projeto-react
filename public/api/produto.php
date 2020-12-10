<?php
require_once "./conexao.php";

$sql = "select * from produto";
$result = $conexao->query($sql);
$produtos = [];
if ($result->num_rows > 0) {
    while ($rows = $result->fetch_assoc()) {
        $produtos[] = $rows;
    }
}

echo json_encode($produtos);
