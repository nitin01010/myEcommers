import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from '../Redux/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' bg-white w-[100%]   '>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </div>
)
