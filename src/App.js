import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import nitLogo from './assets/nitLogo.jpg';
import caair from './assets/centerForNitLogo.jpg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publication from './pages/Publication.js';
import About from './pages/About.js';
import Initiative from './pages/Initiative.js';
import InstituteHome from './pages/InstituteHome.js';
import Team from './pages/Team.js';
import Login from './components/common/Login.js';


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
          <Route path='/About' element={<About />} />
          <Route path='/Initiative' element={<Initiative />} />
          <Route path='/InstituteHome' element={<InstituteHome />} />
          <Route path='/Publication' element={<Publication />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
