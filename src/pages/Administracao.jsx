import ProdutoAdmin from "../components/ProdutoAdmin";
import CategoriaAdmin from "../components/CategoriaAdmin";
import '../style/Administracao.css'
import FuncionarioAdmin from "../components/FuncionarioAdmin";

export function Administracao() {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
                <ProdutoAdmin />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <CategoriaAdmin />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <FuncionarioAdmin />
            </div>
        </div>

    )
}