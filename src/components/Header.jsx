import logo from 'media/logo.png';


const Header = () => {
    return (
    <div>
        <header>
            <ul className="navbar">
                <li>
                    <img
                        className="logo"
                        src={logo}
                        alt="Logo" />
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
    </div>
    );
}

export default Header;