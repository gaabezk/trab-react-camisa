import {useState} from "react";
import '../style/Contato.css';

export function Contato() {
    function PerguntaEnviada(e){
        e.preventDefault();
        console.log(pergunta)
    }

    const [pergunta, setPergunta] = useState()
    const [email, setEmail] = useState()

    return (
        <div>
            <h1 className="titulo" >Enviar Pergunta</h1>
            <form onSubmit={PerguntaEnviada}>
                <div className="input">
                    <input type="text" id="email" name="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" id="pergunta" name="pergunta" placeholder="Insira sua pergunta aqui" onChange={(e) => setPergunta(e.target.value)} />
                </div>
                <div className="input"> 
                    <input type="submit" value="Enviar Pergunta" />
                </div>
            </form>
        </div>
    )

}

export default Contato