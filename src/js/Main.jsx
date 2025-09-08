import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import {Jumbotron} from './components/Jumbotron';
import {Container} from './components/Container';
import {Card} from './components/Card';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    {/* <Container/> */}
  </React.StrictMode>,
)
