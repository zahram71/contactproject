import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./styles.css"
import MyComponent from './Mycomponent.jsx'
import Layout from './Components/index.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Components/About/index.jsx'
import Contact from './Components/Contact/index.jsx'
import Home from './Components/Home/index.jsx'
import Login from './Login.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <>
      
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </Layout>
      </Router>
      
   
    </>
  </React.StrictMode>,
)
