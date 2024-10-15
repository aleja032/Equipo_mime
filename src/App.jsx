import { useState } from 'react'
import BarraAcciones from './components/BarraAcciones'
import Union from './components/Union' //haciendo pruebas
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css'

function App() {

  return (
      <div className=" d-flex align-items-center justify-content-center border p-5"> 
        <BarraAcciones />
        {/* <Union /> */}
      </div>
  )
}

export default App
