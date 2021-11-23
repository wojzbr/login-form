import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import Navbar from '../navbar/Navbar';
import PageContent from '../pageContent/PageContent';
import LogIn from '../logIn/LogIn'
import SignIn from '../signIn/SignIn'
import Footer from '../Footer'
import ProtectedRoute from '../ProtectedRoute';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return ( 
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <div id="app">
          <Routes>
            <Route path="/login-form/signin" element={<SignIn />} />
            <Route path="/login-form/login" element={<LogIn setIsAuthenticated={setIsAuthenticated}/>} />
            <Route exact path="/login-form/protected" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PageContent />
              </ ProtectedRoute>
            } />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
