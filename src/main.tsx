import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { install } from "resize-observer";

if (!window.ResizeObserver) install();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
