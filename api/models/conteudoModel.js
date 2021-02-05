
module.exports = function () {

    this.getProdutos = function (connection, callback) {
        connection.query("SELECT * FROM produto", callback);
    }
    this.getPedidos = function (connection, callback) {
        connection.query("SELECT produto.descricao, tb_pedido.nome_cliente FROM produto INNER JOIN tb_pedido ON produto.idproduto=tb_pedido.nome_produto", callback);
    }
    this.salvarPedido = function (pedido, connection) {
        connection.query("INSERT INTO tb_pedido set?", pedido);
    }

    return this;
}




