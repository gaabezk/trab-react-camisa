import '../style/Home.css'

<<<<<<< Updated upstream

export function Home(){
    return (

        <section>
            <h1>CAMISA<span>10</span></h1>
            <p>A camisa do seu time de coração!</p>
        </section>
=======
export function Home(){
    return (

        <section className="container">
           <h1>Camisa<span>10</span></h1> 
           <img src="/src/img/futebol.webp" alt="Football"></img>
           <h2>A camisa do seu time de coração!</h2>
           <p>Os melhores times do Rio de Janeiro</p>
            
            <div>
            <img src="/src/img/fluminense.png" alt="Fluminense"></img>
            <img src="/src/img/flamengo.png" alt="Flamengo"></img>  
            <img src="/src/img/vasco.png" alt="Vasco"></img>
            <img src="/src/img/botafogo.png" alt="Botafogo"></img>
            </div>
            
        </section>

>>>>>>> Stashed changes
    )
}

export default Home