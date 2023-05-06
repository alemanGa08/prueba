import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CallToAction: React.FC = () => {

  return (    
    <div style={{ margin: '10px' }} className="container navbar-expand-sm">
      <center>
      <h3>"Transforme su visión en una realidad digital con nuestras soluciones personalizadas de aplicaciones web."</h3>
      <h3>"Si tienes una idea, una visión, no esperes a que las cosas sucedan, ¡haz que sucedan!" - Richard Branson</h3>
      </center>
      <div >
        <center>
        <form style={{ paddingTop: '30px' }}>
          <div className="form-group" >
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group" style={{ paddingTop: '20px' }}>
            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email" className="form-control" id="correo" placeholder="Ingresa tu correo electrónico" />
          </div>
          <button style={{ marginTop: '20px' }}type="submit" className="btn btn-primary" >Solicítalo aquí</button>
        </form>
        </center>
       
      </div>
    </div>
  );
};

export default CallToAction;