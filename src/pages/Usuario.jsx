import InserirEndereco from "../components/InserirEndereco";
import UserNewAccount from "../components/UserNewAccount";

export function Usuario() {

    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <UserNewAccount />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
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