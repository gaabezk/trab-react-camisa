import { Produto } from "../components/Produto";
import API from "../API";
import { useEffect, useState } from "react";

export const Catalogo = () => {

    const [produto, setProduto] = useState([]);

    useEffect(() => {
        const pegarDados = async () => {
            const resposta = await API.get("/produto");
            setProduto(resposta.data);
        }

        pegarDados();
    }, []);

    const novoArray = produto.map((t, index) => {
        return (
            <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <Produto nome={t.nome} descricao={t.descricao} tamanho={t.tamanho} genero={t.genero} valor={t.valor} categoria={t.categoria.nome} id={t.id} img={t.url} />
            </div>
        )
    })

    return (
        <div className="row" >
            <img style={{ width: "100%" }} src="/src/img/fundoCatalogo.png" />
            {novoArray}
        </div>
    )
}