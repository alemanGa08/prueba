import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Proyectos: React.FC = () => {

  return (    
    <div className='container' style={{margin: '10px'}}>
      
      <h3>REPOSITORIOS EN GITHUB</h3>
        <ul className="list-unstyled">
            <li><a target="_blank" className="nav-link" href="https://github.com/alemanGa08/Actividad1.github.io">ACTIVIDAD 1</a> </li>
            <li><a target="_blank" className="nav-link" href="https://github.com/alemanGa08/PROGRA-lV">PROGRA Vl</a> </li>
            <li><a target="_blank" className="nav-link" href="https://github.com/AaronBarboza/Parte2-Asignacion2">ASIGNACIÓN2 PARTE2</a> </li> 
            <li><a target="_blank" className="nav-link" href="https://github.com/alemanGa08/Prueba1">PRUEBA1</a> </li> 
        </ul>
   
    </div>
  );
};

export default Proyectos;