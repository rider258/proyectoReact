
import './navBar.css';
import CartWidget from'./CartWidget.jsx';

function Cart() {

    return (
        
            <div className="ItemListContainer">
                <ul className='lista'>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>

                {<CartWidget />}
            </div>

      


    );
}

export default Cart;