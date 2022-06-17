import "../style/bootstrap.min.css"
import "../style/App.css";

export function NavBar2() {
    return (
        <>
            <nav className="navbar">
                <div className="container noPading">
                    <ul className="nav">
                        <li className="nav-item">
                            <img src="/src/img/camisa_10.png" alt="www" />
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/catalogo">Catalogo</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/contato">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/cadastro">Cadastro</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/carrinho">Carrinho</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}