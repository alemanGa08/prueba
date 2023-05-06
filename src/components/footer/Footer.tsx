import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div style={{ margin: '10px' }}>       
          <div style={{ padding: '10px' }}>
    
            <h4>Contacto</h4>
            <ul className="list-unstyled">
              <li>Teléfono: +(506) 85179240</li>
              <li>Email: gabyaleman52@gmail.com</li>
              <li>Facebook: Gabriela Alemán</li>
              <li>Instagram: gabyaleman08</li>
            </ul>
    
          </div>  
          </div>
       
     
    </footer>
  );
};

export default Footer;