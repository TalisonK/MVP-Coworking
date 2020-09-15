import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";

localStorage.setItem("url", 'http://142.93.183.229:3030');

ReactDOM.render(<App/>,document.getElementById('root'));
