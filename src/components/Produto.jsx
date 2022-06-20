import "bootstrap/dist/css/bootstrap.min.css"
import "../style/Produto.css"
import {Button} from "react-bootstrap";

export function Produto({nome, categoria, descricao, img, genero, valor, tamanho,id}) {

    function comprar(){
        console.log("comprou!")
    }



    return (
        <div>
            <div className="produto-back">
                <img style={{marginTop: "30px"}} width="50%" src={img} alt="produto"/>
                    <p className="produto-descricao">{nome} {descricao} {categoria}</p>
                    <p className="produto-descricao">{genero} {tamanho}</p>
                    <h4 className="produto-descricao">R${valor}</h4>
                    <p>{id}</p>
                    <Button onClick={comprar} className="botao">COMPRAR</Button>
            </div>
        </div>


    )
}