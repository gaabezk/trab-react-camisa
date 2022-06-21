import "../style/Produto.css"
import {useState} from "react";
import Carrinho from "./adicionarAoCarrinho";

export function Produto({nome, categoria, descricao, img, genero, valor, tamanho,id}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const idProd = id;

    return (
        <div>
            <div className="produto-back">
                <img style={{marginTop: "30px"}} width="50%" src={img} alt="produto"/>
                <p className="produto-descricao">{nome} {descricao} {categoria}</p>
                <p className="produto-descricao">{genero} {tamanho}</p>
                <h4 className="produto-descricao">R${valor}</h4>
                <p>{id}</p>

                <button className="botaoComprar" onClick={handleShow}>COMPRAR</button>
                <div>
                    <Carrinho id={idProd} show={show} handleClose={handleClose} title="ADICIONAR AO CARRINHO?"
                             texto={`adicionar ${nome} ${descricao} ao carrinho  ?`} />
                </div>
            </div>
        </div>
    )
}