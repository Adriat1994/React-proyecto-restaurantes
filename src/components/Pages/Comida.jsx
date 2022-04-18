import React, { useState } from 'react'
import Platos from "./Platos";
import Restaurantes from "./Restaurantes";
import "./Comida.css";

export default function Comida() {

    const[showFood, setShowFood] = useState (true);


    return (
      <div>
            
        <button
          class="glow-on-hover"
          onClick={() => setShowFood(true)}
        >
          Platos
        </button>
  
        <button
          class="glow-on-hover"
          onClick={() => setShowFood(false)}
        >
          Restaurantes
        </button>
  
        <div>
          {showFood ? (
            <Platos />
          ) : (
            <Restaurantes />
          )}
        </div>
  
  
      </div>
    )
}