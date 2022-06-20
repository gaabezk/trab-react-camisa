import { useState } from "react";
import Message from "./Modal";

export default function FuncionarioAdmin() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [funcionario, setFuncionario] = useState()
    const [cpf, setCpf] = useState() //nao pode ser alterado
    const [dataNascimento, setDataNascimento] = useState()
    const [email, setEmail] = useState()
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [telefone, setTelefone] = useState()
    const [username, setUsername] = useState()

    function alterar(e) {
        e.preventDefault();
        console.log(`${funcionario} alterado com sucesso`)
        console.log(`Alteracoes: Data de Nasc:${dataNascimento}, email:${email}, Nome:${nome}, senha:${senha}, telefone:${telefone}, username:${username}`)
    }
    function cadastrar(e) {
        e.preventDefault();
        console.log(`${funcionario} criado com sucesso`)
        console.log(`Data de Nasc:${dataNascimento}, email:${email}, Nome:${nome}, senha:${senha}, telefone:${telefone}, username:${username}`)
    }

    function deletar(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="titulo">Funcionario</h1>
            <h4 className="titulo">Insira as Informacoes a seguir:</h4>
            <div className="input">
                <input type="text" placeholder="CPF do Funcionario" onChange={(e) => setFuncionario(e.target.value)} />
            </div>
            <form onSubmit={cadastrar}>
                <h4 className="titulo">Informações do funcionario:</h4>
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
                    <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Nome de usuario" onChange={(e) => setUsername(e.target.value)} />
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
                <Message show={show} handleClose={handleClose} title="DESEJA DELETAR?" texto={`voce tem certeza que deseja deletar o funcionario ${funcionario} ?`} />
        </div>
    )
}