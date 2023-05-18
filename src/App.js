import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import AboutMe from './components/About/AboutMe'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import './App.css';
import './Style/Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        
          <Navbar />
          <Routes>

            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>
     
      </BrowserRouter>

    </div>
  );
}

export default App;
