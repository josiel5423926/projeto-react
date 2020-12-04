import './produto.css';

export default function produto(props) {
    /**
    function show_info(event) {
        const target = event.currentTargent;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "initial";
    } */

    function exibir_categoria(event) {

        let elementos = document.getElementsByClassName('figure');

        for (var i = 0; i < elementos.length; i++) {

            if (event === elementos[i].id) {
                elementos[i].style = "display:block";
            }
            else {
                elementos[i].style = "display:none";
            }
        }
    };


    let destaque = (event) => {
        const target = event.currentTargent;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "initial";

        if (elemento.style.height === "80%") {
            elemento.style.height = "50%";
            elemento.parentNode.style.width = "20%";
        } else {
            elemento.style.height = "80%";
            elemento.parentNode.style.width = "30%";
        }
    };

    // ${props.imagem} https://www.npmjs.com/package/react-number-format
    //onclick="destaque(this)" onmousemove="exibirborda(this)" onmouseout="retirarborda(this)"

    return (
        <figure className={props.nome + " produto card   col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto border-primary "}
            onClick={destaque} onMouseOver={exibir_categoria} onMouseOut={destaque}  >
            <img className="card-img-top img-fluid m-1 " src={require(`./img/Kawasaki_1.jpg`).default} alt="imagem do produto" />
            <figcaption >
                <hr className="mt-2 mb-1" />
                <h3 className="h5 text-primary ">{props.descricao}</h3>

                <hr className="mt-2 mb-1" />
                <div className="h5 slab text-muted"><del>R$ {props.preco}</del></div>
                <div className="h5 slab text-danger">R$ {props.preco_final} </div>

                <a href="pedidos.php" className="btn btn-primary">Comprar</a>
            </figcaption>



        </figure >

    );
}