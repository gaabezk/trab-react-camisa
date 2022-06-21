import InserirEndereco from "../components/InserirEndereco";
import UserNewAccount from "../components/UserNewAccount";
import { CardUsuario } from "../components/CardUsuario";
import API from "../API";
import { useEffect, useState } from "react";
import '../style/Cadastro.css'


export const Usuario = () => {

    // const [cliente, setCliente] = useState([]);

    // useEffect(() => {
    //     const pegarDados = async () => {
    //         const resposta = await API.get("/usuario/cliente/22506140085");
    //         setCliente(resposta.data);
    //         console.log(resposta.data)
    //     }

    //     pegarDados();
    // }, []);

    // const novoArray = cliente.map((t, index) => {
    //     return (
    //         <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
    //             <CardUsuario nome={t.nome} cpf={t.cpf} telefone={t.telefone} dataNascimento={t.dataNascimento} email={t.email} userName={t.userName} />
    //         </div>
    //     )
    // })

    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <UserNewAccount />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <InserirEndereco />
                </div>
                {/* <div className="col-lg-4 col-md-4 col-sm-4">
                    {novoArray}
                </div> */}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )

}

export default Usuario;