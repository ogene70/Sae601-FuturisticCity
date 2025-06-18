// App.js
import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import UserController from './controllers/UserController';
import Loginform from './components/Forms/Loginform';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './views/Home';

function App() { 
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const credentials = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    }; 
    
    // Passez navigate en tant qu'argument à UserController
    new UserController(navigate).connection(credentials);
  };

  return (
    <Fragment>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Loginform connexion={login} />} />
        </Routes>
      
    </Fragment>
  );
}

export default App;
