import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const InfoPersonal: React.FC = () => {

  return (    
    <div >
        <div style={{margin: '10px'}} className="container">
     
      <center>
      <h2>UNIVERSIDAD NACIONAL</h2>
      <h2>Estudiante Ingeniería en Sistemas</h2>
      </center>     
 
      <h3>Gabriela Alemán</h3>
      <p>Edad: 20 años / Estado Civil: Soltera.</p> 
       <p>Lugar de residencia: Golfito, Costa Rica / Nacionalidad: Costarricense.</p>
      <p></p>  
      <p></p>
      <h3>Descripcion de la empresa:</h3>
      <p>DigitalDreams es una empresa dedicada a proporcionar soluciones digitales innovadoras 
        para empresas y personas que buscan mejorar su presencia en línea. Ofrecemos servicios como 
        diseño web, desarrollo de aplicaciones móviles, marketing digital, gestión de redes sociales y desarrollo de software personalizado. Nuestro objetivo 
        es ayudar a nuestros clientes a lograr sus objetivos en línea y hacer realidad sus sueños digitales. 
        Con un enfoque en la calidad y el servicio al cliente, estamos comprometidos en proporcionar 
        soluciones digitales de última 
        generación que impulsen el éxito de nuestros clientes.</p>
       <center>
       <a href="https://www.linkedin.com/feed/" target="_blank" className="btn btn-primary">Contácteme en LinkedIn</a>
        </center>      
     
    </div>
    </div>
  );
};

export default InfoPersonal;