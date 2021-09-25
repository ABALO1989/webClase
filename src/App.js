import logo from './media/logo.png';
import './styles/styles.css';
import borderCollier from './media/borderCollier.jpg';
import rodhesian from './media/rodesian.jpg';


function App() {
  return (
    <div className="App">
         <header>
        <ul className="navbar">
            <li>
                <img 
                className="logo"
                src={logo} 
                alt="Logo"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>
            <li> <button className="button secondaryButton">Login</button></li>
            <li><button className="button mainButton">Registro</button></li>
            <li>
                <div className="buscar">
                <input type="text" placeholder="Buscar una raza" />
                <i className="fas fa-search button iconoBusqueda"></i>
            </div>
            </li>
        </ul>

    </header>
    <main>
    <section>
        <h2>Razas de perros</h2>
        <ul className="breedCardContainer">
            <li className="breedCard">
                <div className="contenedorImagen">
                <img src={borderCollier}  alt="Border Colli"/>
                </div>
                <span className="breedTitle">Collie</span>
                <ul className="social">
                    <li><i className="fas fa-heart"></i> 
                        <span className="breedCardText">150</span></li>
                    <li><i className="fas fa-comment"></i> 
                        <span className="breedCardText">1.5k</span></li>
                    <li><i className="fas fa-eye"></i> 
                        <span className="breedCardText">120</span></li>
                </ul>
            </li>
            <li className="breedCard">
                <div className="contenedorImagen">
                <img src={rodhesian}  alt="Rodesiano"/>
                </div>
                <span className="breedTitle">Rhodesian </span>
                <ul className="social">
                    <li><i className="fas fa-heart"></i> 
                        <span className="breedCardText">450</span></li>
                    <li><i className="fas fa-comment"></i> 
                        <span className="breedCardText">1.1k</span></li>
                    <li><i className="fas fa-eye"></i> 
                        <span className="breedCardText">850</span></li>
                </ul>
            </li>
        </ul>
    </section>
    <section></section>
    <footer></footer> 
    </main>
    </div>
  );
}

export default App;
