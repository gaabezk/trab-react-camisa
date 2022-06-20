import { useState } from "react";
import Message from "./Modal";
import API from "../API";

export default function UserNewAccount() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState() //nao pode ser alterado
    const [dataNascimento, setDataNascimento] = useState()
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [senha, setSenha] = useState()
    const [telefone, setTelefone] = useState()

    function cadastrar(e) {
        e.preventDefault();
        API.post("/usuario/cliente", {
                nome: `${nome}`,
                cpf: `${cpf}`,
                dataNascimento: `${dataNascimento}`,
                email:`${email}`,
                senha: `${senha}`,
                telefone: `${telefone}`,
                username: `${username}`
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

    function alterar(e) {
        e.preventDefault();
        API.put(`/usuario/cliente/${cpf}`, {
                nome:`${nome}`,
                telefone: `${telefone}`,
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
        API.delete(`/usuario/cliente/${cpf}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <h1 className="titulo">Usuario</h1>
            <form onSubmit={cadastrar}>
                <h4 className="titulo">Cadastro:</h4>
                <div className="input">
                    <input type="text" placeholder="Nome completo" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
                </div>
                <div className="input">
                    <input type="date" placeholder="Data de nascimento" onChange={(e) => setDataNascimento(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Nome de usuario" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
                </div>

                <div className="input">
                    <input type="submit" value="Cadastrar Funcionario" />
                </div>
            </form>
            <form onSubmit={alterar}>
                <div className="input">
                    <input type="submit" value="Alterar Funcionario" />
                </div>
            </form>
            <form onSubmit={(e) => { setShow(true); deletar(e) }}>
                <div className="input">
                    <input className="deletar" type="submit" value="Deletar Funcionario" />
                </div>
            </form>
            <Message show={show} handleClose={handleClose} title="DESEJA DELETAR?" texto={`voce tem certeza que deseja deletar o cliente ${nome} ?`} />
        </div>
    )
}