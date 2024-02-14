import React from 'react';
import './App.css';
import {Login} from './Component/Assets/Login/Login';
import Signup from './Component/Assets/Signup/Signup';
import { Route,Routes} from 'react-router-dom';
function App() {
  return (
   <>
    <Routes>
      <Route path='/' Component={Login}  />
     < Route path='/Signup' Component={Signup} />
    </Routes>
   </>
  );
}

export default App;
