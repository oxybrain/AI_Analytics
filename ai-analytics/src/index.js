import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import './bootstrap/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Depts from "./pages/Departements";
import Practs from "./pages/Practices";
import Emps from "./pages/Employes";
import NoPage from "./pages/NoPage";

//import Button from 'react-bootstrap/Button';

export default function App() {
  return (
    useEffect(() => {
      document.title = 'AI Analytics';
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = './img/data1.png';
    }, []),
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dept" element={<Depts />} />
          <Route path="/pract" element={<Practs />} />
          <Route path="/emp" element={<Emps />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);