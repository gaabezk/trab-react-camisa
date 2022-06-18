import { useState } from "react";
import '../style/Cadastro.css'

export function CriarConta() {

    function Cadastrar(e) {
        e.preventDefault();
        console.log(`${nome}, seu cadastro foi realizado com sucesso!`)
    }

    const [nome, setNome] = useState()

    return (
        <div>
            <h1 className="titulo">Criar Conta</h1>
            <form onSubmit={Cadastrar}>
                <div className="input">
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" id="senha" name="senha" placeholder="Digite sua senha" />
                </div>
                <div className="input">
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

}

export default CriarConta