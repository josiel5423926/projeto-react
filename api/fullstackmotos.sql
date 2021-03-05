-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 04/03/2021 às 02:01
-- Versão do servidor: 8.0.23-0ubuntu0.20.04.1
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fullstackmotos`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `comentario`
--

CREATE TABLE `comentario` (
  `id` int NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `msg` varchar(200) DEFAULT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int NOT NULL,
  `categoria` varchar(150) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(9,2) NOT NULL,
  `preco_final` decimal(9,2) NOT NULL,
  `imagem` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descricao`, `preco`, `preco_final`, `imagem`) VALUES
(1, 'honda', ' CBR 1000 ', '80000.00', '78000.00', 'honda_1.jpg'),
(2, 'honda', 'CB Twister CBS', '12000.00', '11000.00', 'honda_2.jpg'),
(3, 'honda', ' CB 600 2006', '22000.00', '21000.00', 'honda_3.jpg'),
(4, 'Yamaha', '  R1', '90000.00', '87000.00', 'yamaha_1.jpg'),
(5, 'Yamaha', 'R3', '106500.00', '103000.00', 'yamaha_3.jpg'),
(6, 'Yamaha', ' R6', '22000.00', '19000.00', 'yamaha_2.jpg'),
(7, 'Ducati', '  Monster 1200', '45000.00', '44000.00', 'ducati_2.jpg'),
(8, 'Ducati', ' 1299 Panigale', '65000.00', '58000.00', 'ducati_3.jpg'),
(9, 'Harley Davidson', ' Harley Davidson Xl 883n', '53500.00', '44000.00', 'Harley_Davidson_2.jpg'),
(10, 'Harley Davidson', 'HD Streetfighter 975', '120000.00', '117000.00', 'Harley_Davidson_4.jpg'),
(11, 'Kawasaki', ' ER-6n', '93000.00', '89000.00', 'Kawasaki_1.jpg'),
(12, 'Kawasaki', 'Ninja', '85000.00', '78000.00', 'Kawasaki_2.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_pedido`
--

CREATE TABLE `tb_pedido` (
  `id_pedido` int NOT NULL,
  `nome_cliente` varchar(45) NOT NULL,
  `endereco` varchar(150) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `nome_produto` varchar(45) NOT NULL,
  `valor_unitario` varchar(15) NOT NULL,
  `quantidade` varchar(15) NOT NULL,
  `valor_total` varchar(15) NOT NULL,
  `idproduto` int DEFAULT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `tb_pedido`
--

INSERT INTO `tb_pedido` (`id_pedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`, `idproduto`, `data`) VALUES
(1, '', ' ', ' ', '', '', '', '', NULL, '2021-02-13 02:11:33');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `nome` varchar(220) DEFAULT NULL,
  `email` varchar(220) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`) VALUES
(1, 'josiel', NULL);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`);

--
-- Índices de tabela `tb_pedido`
--
ALTER TABLE `tb_pedido`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `tb_pedido`
--
ALTER TABLE `tb_pedido`
  MODIFY `id_pedido` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
