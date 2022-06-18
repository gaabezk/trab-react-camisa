import { useState } from "react";
import Message from "./Modal";

function ProdutoAdmin() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function alterar(e) {
        e.preventDefault();
        console.log(`${produto} alterado com sucesso`)
        console.log(`Alteracoes: Categoria:${categoria}, Descricao:${descricao}, Genero:${genero}, Nome:${nome}, Quantidade:${quantidadeEstoque}, Tamanho:${tamanho}, Valor:${valor}`)
    }

    function deletar(e) {
        e.preventDefault();
    }

    const [produto, setProduto] = useState()
    const [funcionario, setFuncionario] = useState()
    const [categoria, setCategoria] = useState()
    const [descricao, setDescricao] = useState()
    const [genero, setGenero] = useState()
    const [nome, setNome] = useState()
    const [quantidadeEstoque, setQuantidadeEstoque] = useState()
    const [tamanho, setTamanho] = useState()
    const [valor, setValor] = useState()

    return (
        <div>
            <h1 className="titulo">Produto</h1>
            <h4 className="titulo">Insira as Informacoes a seguir:</h4>
            <div className="input">
                <input type="text" placeholder="Codigo do produto" onChange={(e) => setProduto(e.target.value)} />
            </div>
            <div className="input">
                <input type="text" placeholder="CPF do Funcionario" onChange={(e) => setFuncionario(e.target.value)} />
            </div>
            <form onSubmit={alterar}>
                <h4 className="titulo">Insira as alteracoes do produto:</h4>
                <div className="input">
                    <input type="text" placeholder="Alterar categoria" onChange={(e) => setCategoria(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar descricao" onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar genero" onChange={(e) => setGenero(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar nome" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar quantidade" onChange={(e) => setQuantidadeEstoque(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar tamanho" onChange={(e) => setTamanho(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar valor" onChange={(e) => setValor(e.target.value)} />
                </div>
                <div className="input">
                    <input type="submit" value="Alterar" />
                </div>
            </form>
            <form onSubmit={(e) => { setShow(true); deletar(e) }}>
                <div className="input">
                    <input className="deletar" type="submit" value="Deletar Produto" />
                </div>
            </form>
            <Message show={show} handleClose={handleClose} title="DESEJA DELETAR?" texto={`voce tem certeza que deseja deletar o produto ${produto} ?`} />
        </div>
    )
}

export default ProdutoAdmin
