import React from 'react'

const Contacto = () => {
    return (
        <div>
            <form>
                <input className='email' type="email" placeholder='email'/> 
                <input type="text" placeholder='nombre y apellidos' required/>
                <input type="number" max= {10} placeholder='edad' required/>
                <button type='submit'>Submit</button>
                <input type="file" />
            </form>
            
        </div>
    )
}

export default Contacto
