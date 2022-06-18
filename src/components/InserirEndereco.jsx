import { useState } from "react";
import '../style/Cadastro.css'

export function InserirEndereco() {

    function Cadastrar(e) {
        e.preventDefault();
        console.log(`${nome}, seu cadastro foi realizado com sucesso!`)
    }

    const [cep, setCep] = useState()
    const [numero, setNumero] = useState()
    const [complemento, setComplemento] = useState()

    return (
        <div>
            <h1 className="titulo">Adicionar Endereco</h1>
            <form onSubmit={Cadastrar}>
                <div className="input">
                    <input type="text" id="cep" name="cep" placeholder="CEP" onChange={(e) => setCep(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" id="numero" name="numero" placeholder="Numero" />
                </div>
                <div className="input">
                    <input type="text" id="complemento" name="complemento" placeholder="Complemento" />
                </div>
                <div className="input">
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

}

export default InserirEndereco