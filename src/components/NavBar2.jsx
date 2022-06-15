import "../style/bootstrap.min.css"
import "../style/App.css";

export function NavBar2() {
    return (
        <>
            <nav className="navbar">
                <div className="container noPading">
                    <ul className="nav">
                        <li className="nav-item">
                            <img src="https://media.discordapp.net/attachments/953010683455357009/986735200820150322/camisa_10.png" alt="www"/>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/catalogo">Catalogo</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/carrinho">Carrinho</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/teste">Teste</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/produto">Produto</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}