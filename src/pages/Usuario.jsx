import InserirEndereco from "../components/InserirEndereco";
import UserNewAccount from "../components/UserNewAccount";
import '../style/Cadastro.css'

export function Usuario() {

    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <UserNewAccount />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <InserirEndereco />
                </div>
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