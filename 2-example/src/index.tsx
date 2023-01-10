import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicUI from './components/homework/Session2/BasicUI';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BasicUI text='BANDWIDTH' color1='red' color2='indianred' percent={20}/>
    <BasicUI text='STORAGE' color1='gray' color2='lightcoral' percent={50}/>
    <BasicUI text='USERS' color1='green' color2='lightsalmon' percent={70}/>
    <BasicUI text='VISITORS' color1='yellow' color2='salmon' percent={30}/>
    <BasicUI text='EMAILS' color1='blue' color2='darksalmon' percent={45}/>
    <BasicUI text='BASIC' color1='pink' color2='gold' percent={80}/>
    <BasicUI text='OTHERS' color1='purple' color2='light yellow' percent={37}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
