
import { Alert } from "react-bootstrap";



export default function Erro() {

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === variable) { return pair[1]; }
        }
        return (false);
    }
    var erro = getQueryVariable("erro");       //Retorna o tipo de erro

    if (erro === "erro") {
        return < Alert className="text-center text-dark h5" variant={"primary"}>  Erro ao fazer o pedido!   </Alert>
    } else
        if (erro === "cadastro") {
            return < Alert className="text-center text-dark h5" variant={"primary"}>  Pedido realizado com sucesso !   </Alert>
        } 

    return <></>
}   
