import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";



export default function NavBar () {
    return (
        <div class="navegador">
            <nav>
                <Link to="/" class="button-home">Home</Link>
                <Link to="restaurantes" class="button-Restaurantes">Restaurantes</Link>
                <Link to="platos" class="button-Platos">Platos</Link>  
                <Link to="coments" class="button-Coments">Coments</Link>           
            </nav>
        </div>
    )
}