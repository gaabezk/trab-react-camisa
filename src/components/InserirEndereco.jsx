import { useState } from "react";
import API from "../API";
import Message from "./Modal";

export function InserirEndereco() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cep, setCep] = useState()
    const [numero, setNumero] = useState()
    const [complemento, setComplemento] = useState()
    const [cliente, setCliente] = useState();


    function Cadastrar(e) {
        e.preventDefault();
        API.post(`/endereco/`, {

            cep: `${cep}`,

            complemento: `${complemento}`,

            numero: `${numero}`,

            cliente: {
                cpf: `${cliente}`
            }
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
        API.delete(`/endereco/${cliente}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
        handleClose();
    }

    return (
        <div>
            <h1 className="titulo">Adicionar Endereco</h1>
            <form onSubmit={Cadastrar}>
                <div className="input">
                    <input type="text" id="cpf" name="cpf" placeholder="cpf do cliente" onChange={(e) => setCliente(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" id="cep" name="cep" placeholder="CEP" onChange={(e) => setCep(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" id="numero" name="numero" placeholder="Numero" onChange={(e) => setNumero(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" id="complemento" name="complemento" placeholder="Complemento" onChange={(e) => setComplemento(e.target.value)} />
                </div>
                <div className="input">
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
            <button className="delete" onClick={handleShow}>DELETAR</button>
            <div>
                <Message acao={(e) => deletar(e)} show={show} handleClose={handleClose} title="DELETAR ENDERECO?"
                    texto={`voce tem certeza que deseja deletar o endereco ${cep} ?`} />
            </div>
        </div>
    )
}

export default InserirEndereco