import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";



export default function NavBar () {
    return (
        <div class="navegador">
            <nav>
                <Link to="/" class="button-home">Home</Link>
                <Link to="restaurantes" class="button-Restaurantes">Restaurantes</Link>           
                <Link to="formulario" class="button-Formulario">Formulario</Link>              
            </nav>
        </div>
    )
}