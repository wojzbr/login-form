import './App.css';
import Navbar from '../navbar/Navbar';
import PageContent from '../pageContent/PageContent';
import LogIn from '../logIn/LogIn'
import SignIn from '../signIn/SignIn'
import Footer from '../Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
          <Routes>
            <Route path="/login-form/signin" element={<SignIn />} />
            <Route path="/login-form/login" element={<LogIn />} />
            <Route exact path="/login-form/" element={<PageContent />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
