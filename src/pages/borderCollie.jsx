import React from 'react'

const BorderCollie = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='mx-2 bg-green-400'> Elemento1</div>
            <div className='mx-2 bg-red-800'> Elemento2</div>
            <div className='mx-2 bg-purple-400'> Elemento3</div>
            <button className='boton2'>Haz clic aquí</button>
            <button className='boton2'>Regresar</button>
        </div>
    );
}

export default BorderCollie
