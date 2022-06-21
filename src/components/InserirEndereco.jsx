import { useState } from "react";
import '../style/Cadastro.css'
import API from "../API";

export function InserirEndereco() {

    const [cep, setCep] = useState()
    const [numero, setNumero] = useState()
    const [complemento, setComplemento] = useState()
    const [cliente,setCliente] = useState();


    function Cadastrar(e) {
        e.preventDefault();
        API.post(`/endereco/`, {

            cep: `${cep}`,

            complemento: `${complemento}`,

            numero: `${numero}`,

            cliente: {
                cpf: `${cliente}`
            }},

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
            <h1 className="titulo">Adicionar Endereco</h1>
            <h4 className="titulo">Endereco:</h4>
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
        </div>
    )

}

export default InserirEndereco