import React,{Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import Navbars from './Navbars';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <App/>
      <Navbars/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);