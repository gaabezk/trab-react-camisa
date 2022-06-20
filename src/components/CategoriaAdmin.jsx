import { useState } from "react";
// import Message from "./Modal";
import API from "../API"

function CategoriaAdmin() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [descricao, setDescricao] = useState()
    const [nome, setNome] = useState()
    const [funcionario, setFuncionario] = useState()


    function alterar(e) {
        e.preventDefault();
        console.log("alterou");
    }

    function deletar(e) {
        e.preventDefault();
    }

    function cadastrar(e) {
        e.preventDefault();
        API.post(`/categoria/${funcionario}`, {
            nome: `${nome}`, descricao: `${descricao}` },

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
    
    function alterarOuCadastrar() {
        if (teste==1) {
            alterar()
            console.log("alterou");
        } else {
            cadastrar()
            console.log("cadastrou");
        }
    }

    return (
        <div>
            <h1 className="titulo">Time</h1>
            <h4 className="titulo">Insira as Informacoes a seguir:</h4>
            <div className="input">
                <input type="text" placeholder="Nome do Time" onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="input">
                <input type="text" placeholder="CPF do Funcionario" onChange={(e) => setFuncionario(e.target.value)} />
            </div>
            <form onSubmit={cadastrar}>
                <h4 className="titulo">Insira as alteracoes da Categoria:</h4>
                <div className="input">
                    <input type="text" placeholder="Alterar descricao" onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar nome" onChange={(e) => setNome(e.target.value)} />
                </div>
                {/* <div className="input">
                    <button onClick={() => {setTeste(1)}}> Alterar </button>
                </div> */}
                <div className="input">
                    <input type="submit" value="Cadastrar Categoria" />
                </div>
            </form>
            <form onSubmit={(e) => { setShow(true); deletar(e) }}>
                <div className="input">
                    <input className="deletar" type="submit" value="Deletar Produto" />
                </div>
            </form>
             {/* <Message show={show} handleClose={handleClose} title="DESEJA DELETAR?" texto={`voce tem certeza que deseja deletar o produto ${categoria} ?`} /> */}
        </div>
    )
}

export default CategoriaAdmin
