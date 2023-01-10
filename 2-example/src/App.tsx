import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { IMAGES } from "./assets/images/images";


function App() {
  return (
    <div className="App">
      <header>
        <h1 className='bg-secondary'>The Pulpit Rock</h1>
      </header>
      
      <div className="row w-100">
            <div className="col-12 col-md-3 mb-3">
                <div className='item p-4'>The Drive</div>
                <div className='item p-4'>The Walk</div>
                <div className='item p-4'>The Return</div>
                <div className='item p-4'>The End</div>
            </div>
            <div className="col col-md m-3">
                <h1>The Walk</h1>
                <p>
                    The walk to the Pulpit Rock will take you approximately two hours,
                    give or take an hour depending on the weather conditions and your
                    physical shape.
                </p>
                <img src={IMAGES.LOGO} alt="" />
                <img src={IMAGES.logo2} alt="" />
            </div>
            <div id="div__right" className="col-11 col-md-3 bg-info h-75">
                <div>
                    <h1>What?</h1>
                    <p>
                        The Pulpit Rock is a part of a mountain that looks like a pulpit.
                    </p>
                </div>
                <div>
                    <h1>Where?</h1>
                    <p>The Pulpit Rock is in Norway.</p>
                </div>
                <div>
                    <h1>Price?</h1>
                    <p>The walk is free!</p>
                </div>
            </div>
        </div>
    </div>
  );
}

      export default App;
