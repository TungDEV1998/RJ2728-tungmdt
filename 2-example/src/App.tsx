import React from 'react';
import logo from './logo.svg';
import './App.css';
import anh from './assets/images/product-1.png'


function App() {
  return (
    <div className="App">
      <div className="card mb-3" style={{width: "18rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={anh} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-truncate">Name</h5>
                <p className="card-text text-truncate">Tuoi</p>
                <p className="card-text text-truncate">Dia chi</p>
                <p className="card-text text-truncate">Cong viec</p>
                <p className="card-text text-truncate">So thich</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

      export default App;
