import React from 'react';
import './App.css';
import {Login} from './Component/Assets/Login/Login';
import Signup from './Component/Assets/Signup/Signup';
import Dashboard from './Component/Assets/Dashboard/Dashboard';
import ADashboard from './Component/Assets/AdminDashboard/ADashboard';
import ForgetPassword from './Component/Assets/Forget-Password/ForgetPassword';


import { Route,Routes} from 'react-router-dom';
function App() {
  return (
   <>
    <Routes>
     <Route path='/' Component={Login}  />
     <Route path='/Signup' Component={Signup} />
     <Route path='/Dashboard' Component={Dashboard} />
     <Route path='/AdminDashboard' Component={ADashboard} />
     <Route path='/ForgetPassword' Component={ForgetPassword} />
    
    </Routes>

   </>
  );
}

export default App;

