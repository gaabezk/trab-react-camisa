import { useState } from "react";
import Message from "./Modal";
import API from "../API"
import FormData from 'form-data';

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
  
    async function cadastrar(e) {
        e.preventDefault();
        var data = new FormData();

        const meuJSON = new Blob([JSON.stringify({
            descricao: descricao,  genero: genero,  nome: nome,  quantidadeEstoque: quantidadeEstoque,  tamanho: tamanho,  valor: valor
        })], {
            type: 'application/json'
        });

        data.append("file", foto);
        data.append('produtoDTO',meuJSON, {contentType: 'application/json' });


        var config = {
            method: 'post',
            url: `/produto/${categoria}/20960715002`,
            // headers: {
            //     ...data.getHeaders()
            // },
            headers: { 'Content-Type': 'multipart/form-data' },
            data : data
        };

        API(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
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
        handleClose();
    }

    return (
        <div>
            <h1 className="titulo">Produto</h1>
            <h4 className="titulo">Insira as Informacoes a seguir:</h4>
            <div className="input">
                <input type="text" placeholder="Codigo do produto" onChange={(e) => setProduto(e.target.value)} />
            </div>
            <div className="input">
                <input type="text" placeholder="CPF do Funcionario"
                    onChange={(e) => setFuncionario(e.target.value)} />
            </div>
            <div className="input">
                <input type="text" placeholder="Nome da categoria" onChange={(e) => setCategoria(e.target.value)} />
            </div>
            <form onSubmit={cadastrar}>
                <h4 className="titulo">Informações do produto:</h4>
                <div className="input">
                    <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Marca" onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Genero" onChange={(e) => setGenero(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Quantidade"
                        onChange={(e) => setQuantidadeEstoque(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Tamanho" onChange={(e) => setTamanho(e.target.value)} />
                </div>
                <div className="input">
                    <input type="number" placeholder="Valor" onChange={(e) => setValor(e.target.value)} />
                </div>
                <div className="input">

                    <input type="file" placeholder="Foto" onChange={(e) => setFoto(e.target.files[0])}/>

                </div>
                <div className="input">
                    <input type="submit" value="Cadastrar Produto" />
                </div>
            </form>
            <form onSubmit={alterar}>
                <div className="input">
                    <input type="submit" value="Alterar Produto" />
                </div>
            </form>
            <button className="delete" onClick={handleShow}>DELETAR</button>
            <div>
                <Message acao={(e) => deletar(e)} show={show} handleClose={handleClose} title="DELETAR PRODUTO?"
                    texto={`voce tem certeza que deseja deletar o produto ${nome} ?`} />
            </div>
        </div>
    )
}

export default ProdutoAdmin
