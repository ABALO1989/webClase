import logo from './media/logo.png';
import './styles/styles.css';
import borderCollier from './media/borderCollier.jpg';
import rodhesian from './media/rodesian.jpg';
import CardRazaPerros from './components/CardRazaPerros';


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
           <CardRazaPerros nombreRaza='Border Collie' imagenRaza= {borderCollier} color= 'breedCardRojo' likes="150" comentarios="60" vista= "1500"/>
           <CardRazaPerros nombreRaza='Rhodesian' imagenRaza= {rodhesian} color= 'breedCardVerde' likes="150" comentarios="80" vista= "800" /> 
        </ul>
    </section>
    <section></section>
    <footer>
        </footer> 
    </main>
    </div>
  );
}



export default App;
