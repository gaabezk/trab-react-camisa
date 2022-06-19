import {Rotas} from "./Rotas";
import {Footer2} from "./components/Footer2";
import {Nav} from "./components/Nav";
import "./style/App.css";


function App() {

    return (

        <>
            {/* ================Renderiza navbar================ */}
            <div style={{paddingBottom:"70px"}}><Nav /></div>

            {/* ======Renderiza a pagina do url digitado ====== */}
            <Rotas/>

            <br/>
            <br/>
            {/* =========Renderiza rodapé========= */}
            <Footer2/>
        </>
    );
}

export default App
