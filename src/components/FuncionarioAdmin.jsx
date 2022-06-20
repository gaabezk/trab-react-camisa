import { useState } from "react";
import Message from "./Modal";

export default function FuncionarioAdmin() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function alterar(e) {
        e.preventDefault();
        console.log(`${funcionario} alterado com sucesso`)
        console.log(`Alteracoes: Data de Nasc:${dataNascimento}, email:${email}, Nome:${nome}, senha:${senha}, telefone:${telefone}, username:${username}`)
    }

    function deletar(e) {
        e.preventDefault();
    }

    // {
    //     "cpf": "22506140085",
    //     "dataNascimento": "2000-06-06",
    //     "email": "teste@gmail.com",
    //     "nome": "Gabriel Fernandes",
    //     "senha": "123",
    //     "telefone": "(24)98802-2078",
    //     "username": "gabezk"
    //   }

    const [funcionario, setFuncionario] = useState()
    const [cpf, setCpf] = useState() //nao pode ser alterado
    const [dataNascimento, setDataNascimento] = useState()
    const [email, setEmail] = useState()
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [telefone, setTelefone] = useState()
    const [username, setUsername] = useState()

    return (
        <div>
            <h1 className="titulo">Funcionario</h1>
            <h4 className="titulo">Insira as Informacoes a seguir:</h4>
            <div className="input">
                <input type="text" placeholder="CPF do Funcionario" onChange={(e) => setFuncionario(e.target.value)} />
            </div>
            <form onSubmit={alterar}>
                <h4 className="titulo">Insira as alteracoes do Funcionario:</h4>
                <div className="input">
                    <input type="text" placeholder="Inserir CPF" onChange={(e) => setCpf(e.target.value)} />
                </div>
                <div className="input">
                    <input type="date" placeholder="Alterar data de nascimento" onChange={(e) => setDataNascimento(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar nome" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar senha" onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar telefone" onChange={(e) => setTelefone(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Alterar nome de usuario" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <input type="submit" value="Alterar Funcionario" />
                </div>
                <div className="input">
                    <input type="submit" value="Cadastrar Funcionario" />
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