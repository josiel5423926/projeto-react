<?php include("./conexao.php");?>

<?php

$query = $pdo->query("select * from produto");


$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
 foreach ($res[$i] as $key => $value) {
 }
    $dados[] = array(
        'idproduto' => $res[$i]['idproduto'],
        'categoria' => $res[$i]['categoria'],
       'descricao' => $res[$i]['descricao'],
       'preco' => $res[$i]['preco'],
       'preco_final' => $res[$i]['preco_final'],
       'imagem' => $res[$i]['imagem'],   
   
    );

    }

    if(count($res) > 0){
           $result = json_encode(array('success'=>true, 'result'=>$dados));

       }else{
           $result = json_encode(array('success'=>false, 'result'=>'0'));

       }
       echo $result; 
?>