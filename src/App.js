import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import nitLogo from './assets/nitLogo.jpg';
import caair from './assets/centerForNitLogo.jpg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Initiative from './pages/Initiative.js';
import Team from './pages/Team.js';
import Login from './components/common/Login.js';
import Message from './components/common/Message.js';
import Footer from './footer/Footer.js';
import Contact from './components/common/Contact.js';
import AlumniService from './components/common/AlumniService.js';
import Publication from './pages/Publication.js';


function App() {
  return (
    <div className="App">
      <div className='content-wrap'>
       <div className='topnav'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='nitdgplogo' style={{paddingLeft: '40px'}}>
              <img src={nitLogo} width="40%" height="30%" class='img-responsive' align='left' />
            </div>
            <div className='caair'>
                <img src={caair} width="35%" height="25%" class='img-responsive' align='center' />
            </div>
          </div>
        </div>
      </div>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Initiative' element={<Initiative />} />
          <Route path='/Publication' element={<Publication />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/login' element={<Login />} />
          <Route path='/message' element={<Message />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/alumniservice' element={<AlumniService />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </div>
  );
}

export default App;
