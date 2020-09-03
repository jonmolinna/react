import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { Provider } from 'react-redux';
import store from './redux/store';

// import Cantidad from './components/Cantidad';
// import Comprar from './components/Compra';
import CantidadHooks from './components/CantidadHooks';
import CompraHooks from './components/CompraHooks';
import Buscador from './components/buscador/Buscador';
import Resultado from './components/buscador/Resultado';

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{maxWidth: '370px'}}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={require('./img/img12.jpg')} alt="pokemon" className="card-img"/>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadHooks />
                    </div>
                    <div>
                      <CompraHooks />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <Buscador />
          </div>
          <div className="col-12">
            <Resultado />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
