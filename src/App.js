import React from 'react'
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ConditionsOfUse from './components/ConditionsOfUse';

function App() {
  
  return (
    <div className="App">
      
     <Nav />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/registration" element={<Registration />} />
       <Route path="/*" element={<NotFound />} />
       <Route path="/conditions" element={<ConditionsOfUse/>} />
     </Routes>
    </div>
  );
}

export default App;
