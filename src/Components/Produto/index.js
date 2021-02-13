import './produto.css';

export default function produtos(props) {
   
    
 
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
     

    return (
        <figure className={props.categoria + " produto card   col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto border-primary "}
        onClick={destaque} //onMouseOver={exibir_categoria} onMouseOut={destaque} <img src={require(./img/${props.imagem}).default}
        >

            <img className="card-img-top img-fluid m-1 " src={require('./' + props.imagem).default} alt="imagem do produto" />
            <figcaption >
                <hr className="mt-2 mb-1" />
                <h3 className="h5 text-primary ">{props.descricao}</h3>

                <hr className="mt-2 mb-1" />
                <div className="h5 slab text-muted"><del>R$ {props.preco}</del></div>
                <div className="h5 slab text-danger">R$ {props.preco_final} </div>

                <div className="d-flex justify-content-center">
                    <a href="/Pedidos" className="btn btn-primary">Comprar</a>
                </div>

            </figcaption>

        </figure >

    );
}