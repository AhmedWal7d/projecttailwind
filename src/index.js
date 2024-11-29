import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "bootstrap/dist/css/bootstrap.min.css" 
// import "bootstrap/dist/js/bootstrap.bundle.min.js"  
import "@fortawesome/fontawesome-free/css/all.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));


let qeryclient = new QueryClient()

root.render(
<div >
<React.StrictMode >
  <QueryClientProvider client={qeryclient}>

    <App />
  </QueryClientProvider>
  {/* <ReactQuer */}
  </React.StrictMode>
</div>
);


reportWebVitals();
