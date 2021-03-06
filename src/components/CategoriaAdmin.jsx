import { useState } from "react";
import API from "../API"
import Message from "./Modal";

function CategoriaAdmin() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [descricao, setDescricao] = useState()
    const [nome, setNome] = useState()
    const [funcionario, setFuncionario] = useState()

    function alterar(e) {
        e.preventDefault();
        API.put(`/categoria/${nome}`, {
            nome: `${nome}`,
            descricao: `${descricao}`,
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
        API.delete(`/categoria/${funcionario}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
        handleClose();
    }

    function cadastrar(e) {
        e.preventDefault();
        API.post(`/categoria/${funcionario}`, {
            nome: `${nome}`,
            descricao: `${descricao}`
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

    return (
        <div>
            <form onSubmit={cadastrar}>
                <h1 className="titulo">Time</h1>
                <h4 className="titulo">Insira as Informacoes a seguir:</h4>
                <div className="input">
                    <input type="text" placeholder="Nome do Time" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="CPF do Funcionario" onChange={(e) => setFuncionario(e.target.value)} />
                </div>

                <h4 className="titulo">Informa????es do time:</h4>
                <div className="input">
                    <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder={"Descricao"} onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div className="input">
                    <input type="submit" value="Cadastrar Time" />
                </div>
            </form>

            <form onSubmit={alterar}>
                <div className="input">
                    <input type="submit" value="Alterar Time" />
                </div>
            </form>

            <button className="delete" onClick={handleShow}>DELETAR</button>
            <div>
                <Message acao={(e) => deletar(e)} show={show} handleClose={handleClose} title="DELETAR CATEGORIA?"
                    texto={`voce tem certeza que deseja deletar a categoria ${nome} ?`} />
            </div>
        </div>
    )
}

export default CategoriaAdmin
