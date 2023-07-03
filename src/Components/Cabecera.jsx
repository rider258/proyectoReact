import { useState } from 'react';
import CartWidget from './CartWidget.jsx';
import './Cabecera.css';

const Cabecera = () => {


    /* se declaran las constantes, utilización del hook */
    
    const [ menu ,  setMenu ] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }


    return (
        
        <header className="Cabecera">
            {/* implementacionde algunos iconos de bootstrap */}

            <h1 className="Cabecera-h1">
                <a href="" className="Header-a"> <i className="bi bi-box Cabecera-icono"></i> 3D Geek</a>


                {<CartWidget />}
            </h1>
                {/* añadimos el evento onclick para que este asigne la clase necesaria para que el menú se desplace  */}
            <button onClick={ toggleMenu } className="Cabecera-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Cabecera-svg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>

            {/* Aquí se aplica la clase isActive al menú */}

            <nav className={`Cabecera-nav ${ menu ? 'isActive' : ''}`}>
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">diseños</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">colecciones</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">makes</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">consursos</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">blog</a></li>
                </ul>
            </nav>
        </header>
        
    )
    
       
}

export default Cabecera;