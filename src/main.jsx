import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CartWidget from './CartWidget.jsx'
import NavBar from './NavBar.jsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <NavBar />
    
  </React.StrictMode>,
)
