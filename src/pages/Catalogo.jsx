import {Produto} from "../components/Produto";

export function Catalogo() {

    return (
        <>
            <img width="100%"
                 src="https://www.rioprevidencia.rj.gov.br/cs/groups/public/documents/imagem/cnbf/mdix/~edisp/rp_021445.jpg"/>

            <div className='row'>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <Produto nome="CAMISA" img="/src/img/camiseta.png"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <Produto nome="CAMISA" img="/src/img/camiseta.png"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <Produto nome="CAMISA" img="/src/img/camiseta.png"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <Produto nome="CAMISA" img="/src/img/camiseta.png"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <Produto nome="CAMISA" img="/src/img/camiseta.png"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <Produto nome="CAMISA" img="/src/img/camiseta.png"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <Produto nome="CAMISA" img="/src/img/camiseta.png"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <Produto nome="CAMISA" img="/src/img/camiseta.png"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <Produto nome="CAMISA" img="/src/img/camiseta.png"/>
                </div>
            </div>
        </>
    )
}