import React from 'react';
import "./Home.css";

export default function Home() {  


  return (
    <div>
        <h1>Servicio de catering en Madrid</h1>
        <div className='all_catering_empresas'>
          <h3>Catering para empresas</h3>
          <div className='catering_empresas'>
           <ul>
             <li>En CBE Catering te ofrecemos una variedad de servicios para que elijas el más adecuado para tu evento en cualquier punto de España, ya que disponemos de catering especializado en empresas y un servicio especial de catering para particulares.</li>
             <li>Dentro de cada especialización, ofrecemos diferentes opciones de catering, dependiendo del evento: catering para bodas y comuniones y servicio catering almuerzos y coffee-break para empresas y congresos, delivery food y gourmet experience, entre muchos otros.</li>
           </ul> 
          </div>
          <div className='container-img'>
            <img src='https://www.cbecatering.es/wp-content/uploads/2017/08/empresa-catering-madrid.jpg' alt='platos catering'/>
          </div>

          <div className='catering_empresas'>
           <ul>
             <li>Contratar a CBE Catering es una experiencia única en la que ofreces a tus invitados un nuevo mundo para su paladar, lleno de nuevos sabores y nuevas texturas con las que disfrutarán de cada bocado.</li>
             <li>Disfrutar de un catering de calidad inmejorable ahora es posible gracias a CBE Catering y todos los servicios que ponemos a tu disposición.</li>
             <li>Para saber más sobre nuestras sugerencias solo tienes que ponerte en contacto con nosotros para empezar a disfrutar del mejor servicio de catering en Madrid y solicitar un presupuesto a través de nuestro formulario de contacto o llamar a los números que ponemos a tu disposición.</li>
           </ul> 
          </div>
          <div className='container-img'>
            <img src='https://www.cbecatering.es/wp-content/uploads/2019/07/20190331-sarompas-cbecatering3369-Editar-e1563870686433.jpg' alt='platos catering'/>
          </div>
          
        </div>
        
    </div>
  )
}
