import "../style/bootstrap.min.css"

export function Produto({nome, categoria, descricao, img, genero, valor, tamanho}) {
    return (
        <div>
            <div>
                <img style={{backgroundColor: "#ccc", marginTop: "45px"}} width="50%" src={img} alt="produto"/>
                    <p style={{marginBottom:"0px"}}>{nome} {descricao} {categoria}</p>
                    <p style={{marginBottom:"0px"}}>{genero} {tamanho}</p>
                    <h4 style={{marginBottom:"0px"}}>R${valor}</h4>
            </div>
        </div>


    )
}