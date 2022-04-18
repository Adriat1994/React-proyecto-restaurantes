import React, {useEffect, useState} from 'react'
import "./Restaurantes.css";

export default function About() {
    const BASEURL = "http://localhost:4000";
    const ITEMSURL = "/restaurants";
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
        
        <div class="all_restaurants">
          {items.map(item => (
            <div key={item.id} class="restaurants_box">

            <h1>
              {item.name}
            </h1>     

            <img src={item.image} alt={item.name}/>

            <h4>
             {item.description} 
            </h4>

            <a href={item.location}>Localización</a>              
            
            </div>
          ))}
        </div>
      );
    }
  
}
