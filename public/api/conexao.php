<?php
header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$servername = "localhost";
$username = "josiel";
$password = "1234";
$database = "fullstackmotos";

$conexao = mysqli_connect($servername, $username, $password, $database);

if (!$conexao) {
    die("Falhou a conexão" . mysqli_connect_error());
}
