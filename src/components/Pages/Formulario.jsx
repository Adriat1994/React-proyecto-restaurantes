import React, { useState } from 'react'
import Formularioplatos from "./Formularioplatos";
import Formulariorestaurantes from "./Formulariorestaurantes";

export default function Formulario() {
  const[showRestaurant, setShowRestaurant] = useState (true);


  return (
    <div>
          
      <button
        class="glow-on-hover"
        onClick={() => setShowRestaurant(true)}
      >
        Platos
      </button>

      <button
        class="glow-on-hover"
        onClick={() => setShowRestaurant(false)}
      >
        Restaurantes
      </button>

      <div>
        {showRestaurant ? (
          <Formularioplatos />
        ) : (
          <Formulariorestaurantes />
        )}
      </div>


    </div>
  )
}
