import {useState} from "react";
import Message from "./Modal";
import API from "../API"
import axios from 'axios';

function ProdutoAdmin() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [produto, setProduto] = useState();
    const [funcionario, setFuncionario] = useState();
    const [categoria, setCategoria] = useState();
    const [descricao, setDescricao] = useState();
    const [genero, setGenero] = useState();
    const [nome, setNome] = useState();
    const [quantidadeEstoque, setQuantidadeEstoque] = useState();
    const [tamanho, setTamanho] = useState();
    const [valor, setValor] = useState();
    const [foto, setFoto] = useState();

    var produtoData = {

        "descricao": `${descricao}`,
        "genero": `${genero}`,
        "nome": `${nome}`,
        "quantidadeEstoque": `${quantidadeEstoque}`,
        "tamanho": `${tamanho}`,
        "valor": `${valor}`
    }

    async function cadastrar(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("produtoDTO", produtoData);
        formData.append("file", foto);
        try {
            const response = await axios({
                method: "post",
                url: `http://localhost:8080/produto/${categoria}/${funcionario}`,
                data: formData,
                headers: [{"Content-Type": "application/json"},{"Content-Type": "image/png"}],Accept: 'multipart/form-data',
            });
        } catch (error) {
            console.log(error)
        }
    }

    function alterar(e) {
        e.preventDefault();
        API.put(`/produto/${produto}`, {
                descricao: `{descricao}`,
                genero: `{genero}`,
                nome: `{nome}`,
                quantidadeEstoque: `{quantidadeEstoque}`,
                tamanho: `{tamanho}`,
                valor: `{valor}`,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        )
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }


    function deletar(e) {
        e.preventDefault();
        API.delete(`/produto/${produto}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1 className="titulo">Produto</h1>
            <h4 className="titulo">Insira as Informacoes a seguir:</h4>
            <div className="input">
                <input type="text" placeholder="Codigo do produto" onChange={(e) => setProduto(e.target.value)}/>
            </div>
            <div className="input">
                <input type="text" placeholder="CPF do Funcionario"
                       onChange={(e) => setFuncionario(e.target.value)}/>
            </div>
            <div className="input">
                <input type="text" placeholder="Nome da categoria" onChange={(e) => setCategoria(e.target.value)}/>
            </div>
            <form onSubmit={cadastrar}>
                <h4 className="titulo">Informações do produto:</h4>
                <div className="input">
                    <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="input">
                    <input type="text" placeholder="Marca" onChange={(e) => setDescricao(e.target.value)}/>
                </div>
                <div className="input">
                    <input type="text" placeholder="Genero" onChange={(e) => setGenero(e.target.value)}/>
                </div>
                <div className="input">
                    <input type="text" placeholder="Quantidade"
                           onChange={(e) => setQuantidadeEstoque(e.target.value)}/>
                </div>
                <div className="input">
                    <input type="text" placeholder="Tamanho" onChange={(e) => setTamanho(e.target.value)}/>
                </div>
                <div className="input">
                    <input type="number" placeholder="Valor" onChange={(e) => setValor(e.target.value)}/>
                </div>
                <div className="input">
                    <input type="text" placeholder="Foto" onChange={(e) => setFoto(e.target.value)}/>
                </div>
                <div className="input">
                    <input type="submit" value="Cadastrar Produto"/>
                </div>
            </form>
            <form onSubmit={alterar}>
                <div className="input">
                    <input type="submit" value="Alterar Produto"/>
                </div>
            </form>
            <button className="delete" onClick={handleShow}>DELETAR</button>
            <div>
                <Message acao={(e) => deletar(e)} show={show} handleClose={handleClose} title="DELETAR PRODUTO?"
                         texto={`voce tem certeza que deseja deletar o produto ${nome} ?`}/>
            </div>
        </div>
    )
}

export default ProdutoAdmin
