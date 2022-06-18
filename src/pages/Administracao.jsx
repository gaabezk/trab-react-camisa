import ProdutoAdmin from "../components/ProdutoAdmin";
import '../style/Administracao.css'

export function Administracao() {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4">
                <ProdutoAdmin />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
                <ProdutoAdmin />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
                <ProdutoAdmin />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
                <ProdutoAdmin />
            </div>
        </div>

    )
}