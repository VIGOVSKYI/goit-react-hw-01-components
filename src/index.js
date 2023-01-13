import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const element = React.createElement("div", { a: 5, b: 7 }, "Настолки рулят");
// // console.log(element);

// const elementxlms = <div a = "5">Настолки рулят</div>
// console.log(elementxlms);