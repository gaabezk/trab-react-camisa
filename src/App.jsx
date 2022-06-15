import {Rotas} from "./Rotas";
import {Footer2} from "./components/Footer2";
import {NavBar2} from "./components/NavBar2";
import "./style/App.css";


function App() {

    return (

        <>
            {/* ================Renderiza navbar================ */}
            <div style={{paddingBottom:"70px"}}><NavBar2 /></div>

            {/* ======Renderiza a pagina do url digitado ====== */}
            <Rotas/>

            {/* =========Renderiza rodapé========= */}
            <Footer2/>
        </>
    );
}

export default App
