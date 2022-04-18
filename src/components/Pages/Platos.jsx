import React, { useEffect, useState } from 'react';
import "./Platos.css";

export default function Platos() {
  const BASEURL = "http://localhost:4000";
  const ITEMSURL = "/platos";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(BASEURL+ITEMSURL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      
      <div class="all_platos">
        {items.map(item => (
          <div key={item.id} class="platos_box">

          <h1>
            {item.name}
          </h1>     

          <img src={item.image} alt={item.name}/>

          <h4>
           {item.ingredients} 
          </h4>

          <h4>
           {item.description} 
          </h4>      
                 
          
          </div>
        ))}
      </div>
    );
  }

}