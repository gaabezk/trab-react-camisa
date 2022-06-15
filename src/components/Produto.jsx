import "../style/bootstrap.min.css"

export function Produto(props) {
    return (
        <>

            <h2>{props.nome}</h2>
            <div>
                <img width="30%" src={props.img} alt="produto"/>
            </div>

        </>


    )
}