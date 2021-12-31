import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './components/Functional';
import Unionbank from './components/Unionbank';
import StateinClassComponent from './components/StateinClassComponent';
import StateFunctionalComponent from './components/StateFunctionalComponent';




ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Functional/> */}
    {/* <Unionbank/> */}
   <StateinClassComponent/>
   {/* <StateFunctionalComponent/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
