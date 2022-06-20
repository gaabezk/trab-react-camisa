export function Nav() {
    return (
        <div>
            <nav className="navbar">
                <div className="container noPading">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="https://cdn-icons-png.flaticon.com/512/34/34562.png">
                                <img src="/src/img/camisa_10.png" alt="www" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/catalogo">Catálogo</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/usuario">Sua Conta</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost:3000/administracao">ADM</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}