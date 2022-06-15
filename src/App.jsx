import {Rotas} from "./Rotas";
import {Footer2} from "./components/Footer2";
import {NavBar2} from "./components/NavBar2";
import "./style/App.css";


function App() {

    return (

        <>
            <div style={{paddingBottom:"80px"}}><NavBar2 /></div>


            <Rotas/>


            <Footer2/>

        </>
    );
}

export default App
