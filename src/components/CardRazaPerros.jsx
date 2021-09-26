import { Link } from 'react-router-dom';

function CardRazaPerros({ nombreRaza, imagenRaza, color, likes, comentarios, vista }) {
    return (
        <li className="breedCard">
            <div className={color}>
                <Link to='/rhodesian'>x
                    <div className="contenedorImagen">
                        <img src={imagenRaza} alt={nombreRaza} />
                    </div>
                </Link>
                <span className="breedTitle"> {nombreRaza} </span>
                <ul className="social">
                    <li><i className="fas fa-heart"></i>
                        <span className="breedCardText">{likes}</span></li>
                    <li><i className="fas fa-comment"></i>
                        <span className="breedCardText">{comentarios}</span></li>
                    <li><i className="fas fa-eye"></i>
                        <span className="breedCardText">{vista}</span></li>
                </ul>
            </div>
        </li>
    );
}

export default CardRazaPerros;