import "../style/bootstrap.min.css"

export function Produto({nome, img}) {
    return (
        <>
            <h2>{nome}</h2>
            <div>
                <img width="30%" src={img} alt="produto"/>
            </div>
        </>


    )
}