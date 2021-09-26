function CardRazaPerros (props){
    return (
        <li className="breedCard">
            <div className= {props.color}>
                <div className="contenedorImagen">
                <img src= {props.imagenRaza}  alt={props.nombreRaza}/>
                </div>
                <span className="breedTitle"> {props.nombreRaza} </span>
                <ul className="social">
                    <li><i className="fas fa-heart"></i> 
                        <span className="breedCardText">{props.likes}</span></li>
                    <li><i className="fas fa-comment"></i> 
                        <span className="breedCardText">{props.comentarios}</span></li>
                    <li><i className="fas fa-eye"></i> 
                        <span className="breedCardText">{props.vista}</span></li>
                </ul>
            </div>
        </li>
    );
}

export default CardRazaPerros;