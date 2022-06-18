import { useState } from "react";
import InserirEndereco from "../components/InserirEndereco";
import CriarConta from "../components/CriarConta";
import '../style/Cadastro.css'

export function Cadastro() {
    
    return (
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4">
                <CriarConta/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
                <InserirEndereco/>
            </div>
        </div>
    )

}

export default Cadastro