// import React from 'react';
// import './index.css';
// import { BrowserRouter, Routes, Route } from "react-router";
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Home/>);