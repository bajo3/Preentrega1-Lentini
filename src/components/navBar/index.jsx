import './navbar.css';
import { NavLink, Link } from 'react-router-dom';
import React, {useState} from 'react';
import ItemCount from '../ItemCount';

export const NavBar = () => {

    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/' >Sector7</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="!#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active"  to='/' >Inicio</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to='/categoria/films'>Peliculas</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link " to='/categoria/series' >Series</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " to='/cart' >Carrito</NavLink>
                        </li>
                    </ul>
                        <button className="btn btn-outline-success" type="submit">     {
                        goToCart
                        ? <Link to='/cart'>Terminar compra</Link>:
                        <ItemCount initial = {1} stock={5} onAdd={onAdd}/>}</button>
                            
                    
                </div>
            </div>
        </nav>
    );
}

export default NavBar;