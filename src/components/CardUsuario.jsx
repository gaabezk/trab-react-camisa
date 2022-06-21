import "../style/CardUsuario.css"

export function CardUsuario({nome, cpf, telefone, dataNascimento, email, userName}) {

    function comprar(){
        console.log("info")
    }

    return (
        <div>
            <div className="usuario-info">
                <img style={{marginTop: "30px"}} width="50%"/>
                <h4 className="usuario-descricao">{nome}</h4>
                <p className="usuario-descricao">{cpf}</p>
                <p className="usuario-descricao">{telefone}</p>
                <p className="usuario-descricao">{dataNascimento}</p>
                <p className="usuario-descricao">{email}</p>
                <p className="usuario-descricao">{userName}</p>
            </div>
        </div>
    )
}